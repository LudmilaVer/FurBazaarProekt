import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


import CranbNav from '../../../components/cranbNav/cranbNav';
import ProductCard from "../../../components/ProductCard/ProductCard";
import Filter from "../../../components/QuantityContainer/Filter/Filter";
import Items from "../../../components/QuantityContainer/Items/Items";
import QuantitySelector from "../../../components/QuantityContainer/QuantitySelector/QuantitySelector";
import styles from "./AllProductsPage.module.css";

function AllProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState(searchParams.get("sortType") || "default");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:3333/products/all");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        setError("An error occurred fetching data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) => {
      const minPrice = parseFloat(searchParams.get("minPrice")) || 0;
      const maxPrice = parseFloat(searchParams.get("maxPrice")) || Infinity;
      const includeDiscount = searchParams.get("includeDiscount") === "true";
      if (product.discont_price) {
        if (product.discont_price < minPrice || product.discont_price > maxPrice) {
          return false;
        } 
       } else {
        if (product.price < minPrice || product.price > maxPrice) {
          return false;
        }
      }
      

      if (includeDiscount && !product.discont_price) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortType === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (sortType === "priceHighToLow") {
        return (b.discont_price || b.price) - (a.discont_price || a.price);
      }
      if (sortType === "priceLowToHigh") {
        return (a.discont_price || a.price) - (b.discont_price || b.price);
      }
      if (sortType === "discountPriceHighToLow") {
        return (b.discont_price || b.price) - (a.discont_price || a.price);
      }
      return 0;
    });

  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  if (isLoading) return <p>Loading...</p>;

  if (error) return (
    <div style={{
      color: 'red',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '50px'
    }}>
      {error}
    </div>
  );

  return (
    <div className="globalContainer">
      <div className={styles.allProductsPage}>
        <CranbNav
          items={[
            { path: '/', label: 'Main page' },
            { path: '/categories', label: 'All products', isActive: true }
          ]}
        />
        <div className={styles.categoriesPageTitle}>
          <h2>All products</h2>
        </div>
        <div className={styles.filterContainer}>
          <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
          <Items searchParams={searchParams} setSearchParams={setSearchParams} />
          <div className={styles.selectSort}>
            <span className={styles.sortTitle}>Sorted</span>
            <QuantitySelector sortType={sortType} setSortType={setSortType} searchParams={searchParams} setSearchParams={setSearchParams} />
          </div>
        </div>
        <div className={styles.productsContainer}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProductsPage;
