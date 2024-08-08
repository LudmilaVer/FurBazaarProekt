import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import CranbNav from '../../components/cranbNav/cranbNav';
import styles from '../Categories/CategoriesPage.module.css';

const CategoriesBlock = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3333/categories/all');
        setCategories(response.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("An error occurred fetching data. Please try again later.");
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="globalContainer">
      <div className={styles.categoriesPage}>

        <CranbNav
          items={[
            { path: '/', label: 'Main page' },
            { path: '/categories', label: 'Categories', isActive: true }
          ]}
        />

        <div className={styles.categoriesPageTitle}>
          <h2>Categories</h2>
        </div>

        <ul className={styles.GridCatBox}>
          {categories.slice(0, 8).map((category) => (
            <li key={category.id} className={styles.GridCatItem}>
              <Link to={`/categories/${category.id}`} className={styles.CatItem}>
                <img src={`http://localhost:3333${category.image}`} alt={category.title} className={styles.CatImage} />
                <h3 className={styles.CatImage}>
                  {category.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>

      </div>  
    </div>
  );
};

export default CategoriesBlock;
