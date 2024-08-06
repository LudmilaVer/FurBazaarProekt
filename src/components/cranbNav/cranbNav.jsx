import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cranbNav.module.css';

const cranbNav = ({ items }) => {
  return (
    <div className={styles.breadcrumbContainer}>
      {Array.isArray(items) && items.length > 0 ? (
        items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className={styles.cranbNaveparator}></div>
            )}
            {item.isActive ? (
              <span 
                className={`${styles.breadcrumbItem} ${styles.breadcrumbActive}`} 
                title={item.label}
              >
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.path} 
                className={styles.breadcrumbItem} 
                title={item.label}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))
      ) : (
        <span>No cranbNav available</span>
      )}
    </div>
  );
};

export default cranbNav;




// import React from 'react';
// import { Link } from 'react-router-dom';

// import styles from './cranbNav.module.css';

// const cranbNav = ({ items }) => {
//   return (
//     <div className={styles.breadcrumbContainer}>
//       {Array.isArray(items) && items.length > 0 ? (
//         items.map((item, index) => (
//           <React.Fragment key={index}>
//             {index > 0 && (
//               <div className={styles.cranbNaveparator}></div>
//             )}
//             {item.isActive ? (
//               <span className={`${styles.breadcrumbItem} ${styles.breadcrumbActive}`}>
//                 {item.label}
//               </span>
//             ) : (
//               <Link to={item.path} className={styles.breadcrumbItem} title={item.title}>
//                 {item.label}
//               </Link>
//             )}
//           </React.Fragment>
//         ))
//       ) : (
//         <span>No cranbNav available</span>
//       )}
//     </div>
//   );
// };

// export default cranbNav;
