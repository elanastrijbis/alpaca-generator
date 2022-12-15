import React, { useState } from 'react';
import styles from '../styles/Options.module.css';
import Accessories from './Accessories';
import Backgrounds from './Backgrounds';
import Ears from './Ears';
import Eyes from './Eyes';
import Hair from './Hair';
import Leg from './Leg';
import Mouth from './Mouth';
import Neck from './Neck';

type optionsProps = {
  heading: string;
  handleBackgroundChange: (color: string) => void;
  handleHairChange: (hairStyle: string) => void;
  handleNeckChange: (neckStyle: string) => void;
  handleMouthChange: (mouthStyle: string) => void;
  handleEarsChange: (earStyle: string) => void;
  handleEyesChange: (earStyle: string) => void;
  handleLegChange: (legStyle: string) => void;
  handleAccessoriesChange: (accessoriesStyle: string) => void;
  changeOptionsTab: (component: any) => void;
};

function Options({
  heading,
  changeOptionsTab,
  handleBackgroundChange,
  handleHairChange,
  handleNeckChange,
  handleMouthChange,
  handleEarsChange,
  handleEyesChange,
  handleLegChange,
  handleAccessoriesChange,
}: optionsProps) {
  return (
    <div className={styles.options}>
      <h2 className={styles.h2}>{heading}</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={() => changeOptionsTab(<Hair handleHairChange={handleHairChange} />)}>
          hair
        </button>
        <button className={styles.btn} onClick={() => changeOptionsTab(<Ears handleEarsChange={handleEarsChange} />)}>
          Ears
        </button>
        <button className={styles.btn} onClick={() => changeOptionsTab(<Eyes handleEyesChange={handleEyesChange} />)}>
          Eyes
        </button>
        <button
          className={styles.btn}
          onClick={() => changeOptionsTab(<Mouth handleMouthChange={handleMouthChange} />)}
        >
          Mouth
        </button>
        <button className={styles.btn} onClick={() => changeOptionsTab(<Neck handleNeckChange={handleNeckChange} />)}>
          Neck
        </button>
        <button className={styles.btn} onClick={() => changeOptionsTab(<Leg handleLegChange={handleLegChange} />)}>
          Leg
        </button>
        <button
          className={styles.btn}
          onClick={() => changeOptionsTab(<Accessories handleAccessoriesChange={handleAccessoriesChange} />)}
        >
          Accessories
        </button>
        <button className={styles.btn}>Nose</button>
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

export default Options;
