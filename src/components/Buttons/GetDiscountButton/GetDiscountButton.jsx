import React, { useState } from 'react';
import styles from './GetDiscountButton.module.css';

function GetDiscountButton({ onClick }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    if (isRegistered) return;

    setIsRegistered(true);
    setShowModal(true);
    if (onClick) {
      onClick(e);
    }
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  return (
    <div>
      <button
        className={`${styles.getDiscountButton} ${isRegistered ? styles.registeredState : ''}`}
        onClick={handleClick}
      >
        {isRegistered ? 'Request Submitted' : 'Get a discount'}
      </button>
      {/* {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>Вы зарегистрировались</div>
        </div>
      )} */}
    </div>
  );
}

export default GetDiscountButton;
