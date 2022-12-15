import { useState } from 'react';
import glasses from './assets/accessories/glasses.png';
import Backgrounds from './components/Backgrounds';
import Options from './components/Options';
import styles from './styles/Home.module.css';
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

function App() {
  const [backgrounds, setBackgrounds] = useState<boolean>(false);
  const [background, setBackground] = useState(green50);

  function showBackgrounds() {
    setBackgrounds(!backgrounds);
  }

  function handleBackgroundChange(color: string) {
    setBackground(color);
  }

  return (
    <div className={styles.app}>
      <h1>Alpaca Generator</h1>
      <div className={styles.container}>
        <img src={background} alt="Blue background" />
        <div>
          <Options heading="Accessorize the alpaca's" showBackgrounds={showBackgrounds} />
          {backgrounds && <Backgrounds handleBackgroundChange={handleBackgroundChange} />}
        </div>
      </div>
    </div>
  );
}

export default App;
