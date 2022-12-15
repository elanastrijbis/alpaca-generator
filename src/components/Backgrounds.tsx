import React, { useState } from 'react';
import styles from '../styles/Options.module.css';
import blue50 from '../assets/backgrounds/blue50.png';
import blue60 from '../assets/backgrounds/blue60.png';
import blue70 from '../assets/backgrounds/blue70.png';
import darkblue30 from '../assets/backgrounds/darkblue30.png';
import darkblue50 from '../assets/backgrounds/darkblue50.png';
import darkblue70 from '../assets/backgrounds/darkblue70.png';
import green50 from '../assets/backgrounds/green50.png';
import green60 from '../assets/backgrounds/green60.png';
import green70 from '../assets/backgrounds/green70.png';
import grey40 from '../assets/backgrounds/grey40.png';
import grey70 from '../assets/backgrounds/grey70.png';
import grey80 from '../assets/backgrounds/grey80.png';
import red50 from '../assets/backgrounds/red50.png';
import red60 from '../assets/backgrounds/red60.png';
import red70 from '../assets/backgrounds/red70.png';
import yellow50 from '../assets/backgrounds/yellow50.png';
import yellow60 from '../assets/backgrounds/yellow60.png';
import yellow70 from '../assets/backgrounds/yellow70.png';

type backgroundProps = {
  handleBackgroundChange: (color: string) => string | void;
};

function Backgrounds({ handleBackgroundChange }: backgroundProps) {
  return (
    <div className={styles.options}>
      <h2 className={styles.h2}>Styles</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={() => handleBackgroundChange(blue50)}>
          Blue 50
        </button>
        <button className={styles.btn} onClick={() => console.log('hi')}>
          Blue 60
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(blue70)}>
          Blue 70
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(darkblue30)}>
          Dark Blue 30
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(darkblue50)}>
          Dark Blue 50
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(darkblue70)}>
          Dark Blue 70
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(green50)}>
          Green 50
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(green60)}>
          Green 60
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(green70)}>
          Green 70
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(grey40)}>
          Grey 40
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(grey70)}>
          Grey 70
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(grey80)}>
          Grey 80
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(red50)}>
          Red 50
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(red60)}>
          Red 60
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(red70)}>
          Red 70
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(yellow50)}>
          Yellow 50
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(yellow60)}>
          Yellow 60
        </button>
        <button className={styles.btn} onClick={() => handleBackgroundChange(yellow70)}>
          Yellow 70
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Backgrounds;
