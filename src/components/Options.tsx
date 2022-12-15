import React, { useState } from 'react';
import styles from '../styles/Options.module.css';
import Backgrounds from './Backgrounds';
import Hair from './Hair';

type accessoriesProps = {
  heading: string;
  handleBackgroundChange: (color: string) => void;
  handleHairChange: (hairStyle: string) => void;
  changeOptionsTab: (component: any) => void;
};

function Accessories({ heading, changeOptionsTab, handleBackgroundChange, handleHairChange }: accessoriesProps) {
  return (
    <div className={styles.options}>
      <h2 className={styles.h2}>{heading}</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={() => changeOptionsTab(<Hair handleHairChange={handleHairChange} />)}>
          hair
        </button>
        <button className={styles.btn}>Ears</button>
        <button className={styles.btn}>Eyes</button>
        <button className={styles.btn}>Mouth</button>
        <button className={styles.btn}>Neck</button>
        <button className={styles.btn}>Leg</button>
        <button className={styles.btn}>Accessories</button>
        <button
          className={styles.btn}
          onClick={() => changeOptionsTab(<Backgrounds handleBackgroundChange={handleBackgroundChange} />)}
        >
          Background
        </button>
      </div>
    </div>
  );
}

export default Accessories;
