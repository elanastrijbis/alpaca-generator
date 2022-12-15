import React from 'react';
import styles from '../styles/Options.module.css';
import astonished from '../assets/mouth/astonished.png';
import defaultMouth from '../assets/mouth/default.png';
import eating from '../assets/mouth/eating.png';
import laugh from '../assets/mouth/laugh.png';
import tongue from '../assets/mouth/tongue.png';

type mouthProps = {
  handleMouthChange: (mouthStyle: string) => string | void;
};

function Hair({ handleMouthChange }: mouthProps) {
  return (
    <div className={styles.options}>
      <h2 className={styles.h2}>Styles</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={() => handleMouthChange(astonished)}>
          Astonished
        </button>
        <button className={styles.btn} onClick={() => handleMouthChange(defaultMouth)}>
          Default
        </button>
        <button className={styles.btn} onClick={() => handleMouthChange(eating)}>
          Eating
        </button>
        <button className={styles.btn} onClick={() => handleMouthChange(laugh)}>
          Laughing
        </button>
        <button className={styles.btn} onClick={() => handleMouthChange(tongue)}>
          Tongue
        </button>
      </div>
    </div>
  );
}

export default Hair;
