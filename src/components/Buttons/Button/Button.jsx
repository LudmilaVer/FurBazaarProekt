import { Link } from "react-router-dom"; // Импортируем компонент Link из react-router-dom для создания навигационных ссылок

import styles from "./Button.module.css"; // Импортируем стили из файла Button.module.css

// Определяем функциональный компонент Button, который принимает несколько пропсов
const Button = ({ children, onClick, isActive, isLink, to }) => {
  // Если prop isLink установлен в true, компонент рендерит ссылку
  if (isLink) {
    return (
      <Link
        to={to} // Устанавливаем путь, куда должна вести ссылка
        className={
          isActive ? `${styles.Button} ${styles.Active}` : styles.Button
          // Устанавливаем класс: если isActive true, добавляем стиль Active
        }
      >
        {children} {/* Дочерние элементы компонента */}
      </Link>
    );
  }
  // Если prop isLink не установлен, компонент рендерит кнопку
  return (
    <button
      className={isActive ? `${styles.Button} ${styles.Active}` : styles.Button}
      // Устанавливаем класс: если isActive true, добавляем стиль Active
      onClick={onClick} // Привязываем обработчик события onClick
    >
      {children} {/* Дочерние элементы компонента */}
    </button>
  );
};

export default Button; // Экспортируем компонент Button по умолчанию
