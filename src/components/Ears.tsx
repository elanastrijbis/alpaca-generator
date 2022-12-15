import React from 'react';
import styles from '../styles/Options.module.css';
import defaultEars from '../assets/ears/default.png';
import tiltBackward from '../assets/ears/tilt-backward.png';
import tiltForward from '../assets/ears/tilt-forward.png';

type earProps = {
  handleEarsChange: (mouthStyle: string) => string | void;
};

function Ears({ handleEarsChange }: earProps) {
  return (
    <div className={styles.options}>
      <h2 className={styles.h2}>Styles</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={() => handleEarsChange(defaultEars)}>
          Default
        </button>
        <button className={styles.btn} onClick={() => handleEarsChange(tiltBackward)}>
          Tilt Backward
        </button>
        <button className={styles.btn} onClick={() => handleEarsChange(tiltForward)}>
          Tilt Forward
        </button>
      </div>
    </div>
  );
}

export default Ears;
