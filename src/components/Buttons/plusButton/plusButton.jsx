import { useState } from 'react';
import styles from './plusButton.module.css'; 

function PlusButton({ onClick }) {
  const [state, setState] = useState('normal');

  // Обработчик клика по кнопке
  const handleClick = (e) => {
    setState('added'); // Устанавливаем состояние 'added' при клике
    if (onClick) {
      onClick(e); // Выполняем переданный обработчик клика
    }
    setTimeout(() => setState('normal'), 2000); // Возвращаем состояние 'normal' через 2 секунды
  };

  return (
    <button
      className={`${styles.plusButton} ${state === 'added' ? styles.plusedState : ''}`}
      onClick={handleClick}
    >
      {state === 'added' ? 'Added' : 'Add to cart'}
    </button>
  );
}

export default PlusButton;
