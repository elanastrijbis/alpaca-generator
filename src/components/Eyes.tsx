import React from 'react';
import styles from '../styles/Options.module.css';
import angry from '../assets/eyes/angry.png';
import defaultEyes from '../assets/eyes/default.png';
import naughty from '../assets/eyes/naughty.png';
import panda from '../assets/eyes/panda.png';
import smart from '../assets/eyes/smart.png';
import star from '../assets/eyes/star.png';

type eyeProps = {
  handleEyesChange: (eyeStyle: string) => string | void;
};

function Eyes({ handleEyesChange }: eyeProps) {
  return (
    <div className={styles.options}>
      <h2 className={styles.h2}>Styles</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={() => handleEyesChange(defaultEyes)}>
          Angry
        </button>
        <button className={styles.btn} onClick={() => handleEyesChange(naughty)}>
          Default
        </button>
        <button className={styles.btn} onClick={() => handleEyesChange(panda)}>
          Naughty
        </button>
        <button className={styles.btn} onClick={() => handleEyesChange(smart)}>
          Smart
        </button>
        <button className={styles.btn} onClick={() => handleEyesChange(star)}>
          Star
        </button>
      </div>
    </div>
  );
}

export default Eyes;
