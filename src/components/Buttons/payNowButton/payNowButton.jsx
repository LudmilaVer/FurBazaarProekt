import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../payNowButton/payNowButton';

function CheckOutButton() {
  return (
    <Link to="/discounted-products" className={styles.buttonStyle}>
      Check out
    </Link>
  );
}

export default CheckOutButton;
