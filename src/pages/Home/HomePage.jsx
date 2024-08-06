// import React from 'react';

// import payNowButton from '../../components/Buttons/payNowButton/payNowButton';
// import catHeader from '../../components/catHeader/catHeader';
// import DiscountForm from '../../components/DiscountForm/DiscountForm';
// import Sale from '../../components/Sale/Sale';
// import styles from './HomePage.module.css';

// import backgroundImg from '../../assets/images/Banner.jpg';

// function HomePage() {
//   return (
//     <div>
//       <div className="globalContainer">
//         <div className={styles.contentStyle}>
//           <h1>Amazing Discounts <br/> on Pets Products!</h1>
//           <payNowButton />
//         </div>
//       </div>
//       <div className={styles.mainBgStyle} style={{ backgroundImage: `url(${backgroundImg})` }}></div>

//       <catHeader />
//       <DiscountForm />
//       <Sale />
//     </div>
//   );
// }

// export default HomePage;

import React from 'react';

import payNowButton from '../../components/Buttons/payNowButton/payNowButton';
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
          <payNowButton />
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