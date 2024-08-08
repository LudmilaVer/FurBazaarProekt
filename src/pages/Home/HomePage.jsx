import React from 'react';

import PayButton from '../../components/Buttons/PayButton/PayButton';
import Hedcat from '../../components/catHeader/catHeader';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import Sale from '../../components/Sale/Sale';
import styles from './HomePage.module.css';

import backgroundImg from '../../assets/Png/Banner.jpg';


function HomePage() {
  return (
    <div>
      <div className="globalContainer">
        <div className={styles.contentStyle}>
          <h1>Amazing Discounts <br/> on Pets Products!</h1>
          <PayButton />
        </div>
      </div>
      <div className={styles.mainBgStyle} style={{ backgroundImage: `url(${backgroundImg})` }}>
        
      </div>

      <Hedcat />
      <DiscountForm />
      <Sale />
    </div>
  );
}

export default HomePage;