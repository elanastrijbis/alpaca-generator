import React from 'react';
import styles from '../styles/Options.module.css';
import bendBackward from '../assets/neck/bend-backward.png';
import bendForward from '../assets/neck/bend-forward.png';
import defaultNeck from '../assets/neck/default.png';
import thick from '../assets/neck/thick.png';

type neckProps = {
  handleNeckChange: (hairStyle: string) => string | void;
};

function Neck({ handleNeckChange }: neckProps) {
  return (
    <div className={styles.options}>
      <h2 className={styles.h2}>Styles</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={() => handleNeckChange(bendBackward)}>
          Bend-backward
        </button>
        <button className={styles.btn} onClick={() => handleNeckChange(bendForward)}>
          Bend-wordward
        </button>
        <button className={styles.btn} onClick={() => handleNeckChange(defaultNeck)}>
          Default
        </button>
        <button className={styles.btn} onClick={() => handleNeckChange(thick)}>
          Thick
        </button>
      </div>
    </div>
  );
}

export default Neck;
