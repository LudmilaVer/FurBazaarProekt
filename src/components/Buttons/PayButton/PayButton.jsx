import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PayButton.module.css';

function PayButton() {
  return (
    <Link to="/discounted-products" className={styles.buttonStyle}>
      Check out
    </Link>
  );
}

export default PayButton;
