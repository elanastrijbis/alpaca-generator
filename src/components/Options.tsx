import React, { useState } from 'react';
import styles from '../styles/Options.module.css';

type accessoriesProps = {
  heading: string;
  showBackgrounds?: () => void;
};

function Accessories({ heading, showBackgrounds }: accessoriesProps) {
  return (
    <div className={styles.options}>
      <h2 className={styles.h2}>{heading}</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn}>hair</button>
        <button className={styles.btn}>Ears</button>
        <button className={styles.btn}>Eyes</button>
        <button className={styles.btn}>Mouth</button>
        <button className={styles.btn}>Neck</button>
        <button className={styles.btn}>Leg</button>
        <button className={styles.btn}>Accessories</button>
        <button className={styles.btn} onClick={showBackgrounds}>
          Background
        </button>
      </div>
    </div>
  );
}

export default Accessories;
