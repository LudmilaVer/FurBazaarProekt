import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styles from './catHeader.module.css';

const Hedcat = () => {
  const [categories, allCat] = useState([]);

  useEffect(() => {
    // Асинхронная функция для получения данных о категориях
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3333/categories/all');
        allCat(response.data); // Устанавливаем полученные данные в состояние
      } catch (error) {
        console.error("Ошибка при получении категорий:", error);
      }
    };

    fetchCategories(); // Вызов функции для получения данных
  }, []); // Пустой массив зависимостей означает, что эффект выполняется только один раз при монтировании компонента

  return (
    <div className={styles.globalContainer}>
      <div className={styles.categoriesBlock}>
        <div className={styles.titleBlock}>
          <h2>Категории</h2>
          <div className={styles.titleBlockLine}></div>
          <Link to="/categories" className={styles.titleBlockButton}>
            Все категории
          </Link>
        </div>

        <ul className={styles.gridCategoriesContainer}>
          {categories.slice(0, 4).map((category) => (
            <li key={category.id} className={styles.gridCategoriesItem}>
              <Link to={`/categories/${category.id}`} className={styles.categoryItem}>
                <img src={`http://localhost:3333${category.image}`} alt={category.title} className={styles.categoryImage} />
                <h3 className={styles.categoryName}>{category.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hedcat;
