import React from 'react';
import styles from '../styles/Options.module.css';
import bubbleTea from '../assets/leg/bubble-tea.png';
import cookie from '../assets/leg/cookie.png';
import defaultLegs from '../assets/leg/default.png';
import gameConsole from '../assets/leg/game-console.png';
import tiltBackwardLeg from '../assets/leg/tilt-backward.png';
import tiltForwardLeg from '../assets/leg/tilt-forward.png';

type legProps = {
  handleLegChange: (legStyle: string) => string | void;
};

function Leg({ handleLegChange }: legProps) {
  return (
    <div className={styles.options}>
      <h2 className={styles.h2}>Styles</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={() => handleLegChange(bubbleTea)}>
          Bubble Tea
        </button>
        <button className={styles.btn} onClick={() => handleLegChange(cookie)}>
          Cookie
        </button>
        <button className={styles.btn} onClick={() => handleLegChange(defaultLegs)}>
          Default
        </button>
        <button className={styles.btn} onClick={() => handleLegChange(gameConsole)}>
          Game Console
        </button>
        <button className={styles.btn} onClick={() => handleLegChange(tiltBackwardLeg)}>
          Tilt Backward
        </button>
        <button className={styles.btn} onClick={() => handleLegChange(tiltForwardLeg)}>
          Tilt Forward
        </button>
      </div>
    </div>
  );
}

export default Leg;
