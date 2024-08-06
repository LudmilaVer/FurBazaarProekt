import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import styles from './catHeader.module.css';

const Hedcat = () => {
  // Создаем состояние для хранения списка категорий
  const [categoryList, AllCat] = useState([]);

  // Используем useEffect для загрузки данных при монтировании компонента
  useEffect(() => {
    // Асинхронная функция для загрузки данных о категориях с сервера
    const loadCategoryData = async () => {
      try {
        // Делаем GET-запрос на сервер для получения всех категорий
        const response = await axios.get('http://localhost:3333/categories/all');
        // Обновляем состояние с полученными данными
        AllCat(response.data);
      } catch (error) {
        // Обработка ошибки в случае неудачного запроса
        console.error("Error fetching categories:", error);
      }
    };

    // Вызов функции для загрузки данных
    loadCategoryData();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании компонента

  return (
    <div className="globalContainer">
      <div className={styles.CatBox}>
        {/* Блок заголовка */}
        <div className="titleBlock">
          <h2>Categories</h2>
          <div className="titleBlockLine"></div>
          {/* Ссылка на страницу со всеми категориями */}
          <Link to="/categories" className="titleBlockButton">
            All categories
          </Link>
        </div>

        {/* Список категорий, отображаем только первые четыре */}
        <ul className={styles.GridCatBox}>
          {categoryList.slice(0, 4).map((category) => (
            <li key={category.id} className={styles.GridCatItem}>
              {/* Ссылка на страницу категории */}
              <Link to={`/categories/${category.id}`} className={styles.CatItem}>
                {/* Изображение категории */}
                <img src={`http://localhost:3333${category.image}`} alt={category.title} className={styles.CatImage} />
                {/* Название категории */}
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

export default Hedcat;
