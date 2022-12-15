import React from 'react';
import styles from '../styles/Options.module.css';
import bang from '../assets/hair/bang.png';
import curls from '../assets/hair/curls.png';
import defaultHair from '../assets/hair/default.png';
import elegant from '../assets/hair/elegant.png';
import fancy from '../assets/hair/fancy.png';
import quiff from '../assets/hair/quiff.png';
import short from '../assets/hair/short.png';

type hairProps = {
  handleHairChange: (hairStyle: string) => string | void;
};

function Hair({ handleHairChange }: hairProps) {
  return (
    <div className={styles.options}>
      <h2 className={styles.h2}>Styles</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={() => handleHairChange(bang)}>
          Bang
        </button>
        <button className={styles.btn} onClick={() => handleHairChange(curls)}>
          Curls
        </button>
        <button className={styles.btn} onClick={() => handleHairChange(defaultHair)}>
          Default
        </button>
        <button className={styles.btn} onClick={() => handleHairChange(elegant)}>
          Elegant
        </button>
        <button className={styles.btn} onClick={() => handleHairChange(fancy)}>
          fancy
        </button>
        <button className={styles.btn} onClick={() => handleHairChange(quiff)}>
          quiff
        </button>
        <button className={styles.btn} onClick={() => handleHairChange(short)}>
          short
        </button>
      </div>
    </div>
  );
}

export default Hair;
