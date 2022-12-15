import { useState } from 'react';
import Backgrounds from './components/Backgrounds';
import Options from './components/Options';
import Hair from './components/Hair';

import styles from './styles/Home.module.css';

import nose from './assets/nose.png';

import blue50 from './assets/backgrounds/blue50.png';
import blue60 from './assets/backgrounds/blue60.png';
import blue70 from './assets/backgrounds/blue70.png';
import darkblue30 from './assets/backgrounds/darkblue30.png';
import darkblue50 from './assets/backgrounds/darkblue50.png';
import darkblue70 from './assets/backgrounds/darkblue70.png';
import green50 from './assets/backgrounds/green50.png';
import green60 from './assets/backgrounds/green60.png';
import green70 from './assets/backgrounds/green70.png';
import grey40 from './assets/backgrounds/grey40.png';
import grey70 from './assets/backgrounds/grey70.png';
import grey80 from './assets/backgrounds/grey80.png';
import red50 from './assets/backgrounds/red50.png';
import red60 from './assets/backgrounds/red60.png';
import red70 from './assets/backgrounds/red70.png';
import yellow50 from './assets/backgrounds/yellow50.png';
import yellow60 from './assets/backgrounds/yellow60.png';
import yellow70 from './assets/backgrounds/yellow70.png';

import bang from './assets/hair/bang.png';
import curls from './assets/hair/curls.png';
import defaulthair from './assets/hair/default.png';
import elegant from './assets/hair/elegant.png';
import fancy from './assets/hair/fancy.png';
import quiff from './assets/hair/quiff.png';
import bendBackward from './assets/neck/bend-backward.png';
import bendForward from './assets/neck/bend-wordward.png';
import defaultNeck from './assets/neck/default.png';
import thick from './assets/neck/thick.png';

import astonished from './assets/mouth/astonished.png';
import defaultMouth from './assets/mouth/default.png';
import eating from './assets/mouth/eating.png';
import laugh from './assets/mouth/laugh.png';
import tongue from './assets/mouth/tongue.png';

import defaultEars from './assets/ears/default.png';
import tiltBackward from './assets/ears/tilt-backward.png';
import tiltForward from './assets/ears/tilt-forward.png';

import angry from './assets/eyes/angry.png';
import defaultEyes from './assets/eyes/default.png';
import naughty from './assets/eyes/naughty.png';
import panda from './assets/eyes/panda.png';
import smart from './assets/eyes/smart.png';
import star from './assets/eyes/star.png';

import bubbleTea from './assets/leg/bubble-tea.png';
import cookie from './assets/leg/cookie.png';
import defaultLegs from './assets/leg/default.png';
import gameConsole from './assets/leg/game-console.png';
import tiltBackwardLeg from './assets/leg/tilt-backward.png';
import tiltForwardLeg from './assets/leg/tilt-forward.png';

import earings from './assets/accessories/earings.png';
import flower from './assets/accessories/flower.png';
import glasses from './assets/accessories/glasses.png';
import headphones from './assets/accessories/headphones.png';

function App() {
  const [background, setBackground] = useState(green50);
  const [hair, setHair] = useState(defaulthair);
  const [neck, setNeck] = useState(defaultNeck);
  const [mouth, setMouth] = useState(defaultMouth);
  const [ears, setEars] = useState(defaultEars);
  const [eyes, setEyes] = useState(defaultEyes);
  const [leg, setLeg] = useState(defaultLegs);
  const [accessories, setAccessories] = useState(earings);

  function handleBackgroundChange(color: string) {
    setBackground(color);
  }

  function handleHairChange(hairStyle: string) {
    setHair(hairStyle);
  }

  function handleNeckChange(neckStyle: string) {
    setNeck(neckStyle);
  }
  function handleMouthChange(mouthStyle: string) {
    setMouth(mouthStyle);
  }

  function handleEarsChange(earStyle: string) {
    setEars(earStyle);
  }

  function handleEyesChange(eyeStyle: string) {
    setEyes(eyeStyle);
  }

  function handleLegChange(legStyle: string) {
    setLeg(legStyle);
  }

  function handleAccessoriesChange(accessoriesStyle: string) {
    setAccessories(accessoriesStyle);
  }

  const [options, setOptions] = useState(<Backgrounds handleBackgroundChange={handleBackgroundChange} />);

  function changeOptionsTab(component: any) {
    setOptions(component);
  }

  return (
    <div className={styles.app}>
      <h1>Alpaca Generator</h1>
      <div className={styles.container}>
        <img src={background} alt="Background color" />
        <img src={hair} alt="Hair style alpaca" className={styles.hair} />
        <img src={neck} alt="Neck style alpaca" className={styles.neck} />
        <img src={mouth} alt="Mouth style alpaca" className={styles.mouth} />
        <img src={ears} alt="Ear style alpaca" className={styles.ears} />
        <img src={eyes} alt="Eye style alpaca" className={styles.eyes} />
        <img src={leg} alt="Leg style alpaca" className={styles.leg} />
        <img src={accessories} alt="accessories style alpaca" className={styles.accessories} />
        <img src={nose} alt="Nose style alpaca" className={styles.nose} />
        <div>
          <Options
            heading="Accessorize the alpaca's"
            changeOptionsTab={changeOptionsTab}
            handleBackgroundChange={handleBackgroundChange}
            handleHairChange={handleHairChange}
            handleNeckChange={handleNeckChange}
            handleMouthChange={handleMouthChange}
            handleEarsChange={handleEarsChange}
            handleEyesChange={handleEyesChange}
            handleLegChange={handleLegChange}
            handleAccessoriesChange={handleAccessoriesChange}
          />
          {options}
        </div>
      </div>
    </div>
  );
}

export default App;
