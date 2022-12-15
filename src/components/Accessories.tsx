import React from 'react';
import styles from '../styles/Options.module.css';

import earings from '../assets/accessories/earings.png';
import flower from '../assets/accessories/flower.png';
import glasses from '../assets/accessories/glasses.png';
import headphones from '../assets/accessories/headphone.png';

type accessoriesProps = {
  handleAccessoriesChange: (accessoriesStyle: string) => string | void;
};

function Accessories({ handleAccessoriesChange }: accessoriesProps) {
  return (
    <div className={styles.options}>
      <h2 className={styles.h2}>Styles</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={() => handleAccessoriesChange(earings)}>
          Earings
        </button>
        <button className={styles.btn} onClick={() => handleAccessoriesChange(flower)}>
          Flower
        </button>
        <button className={styles.btn} onClick={() => handleAccessoriesChange(glasses)}>
          Glasses
        </button>
        <button className={styles.btn} onClick={() => handleAccessoriesChange(headphones)}>
          Headphones
        </button>
      </div>
    </div>
  );
}

export default Accessories;
