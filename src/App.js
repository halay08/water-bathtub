import BathTub from './components/BathTub';
import './App.scss';
import './style/index.scss';
import { useEffect, useState } from 'react';
import Button from './components/Button';

const EMPTY_LEVEL = 0;
const FILLED_LEVEL = 5;

let timer = null;

function App() {
  const [waterLevel, setWaterLevel] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const clearTimer = () => {
    setIsAnimating(false);
    clearInterval(timer);
    timer = null;
  };

  const handleFillWater = () => {
    if (waterLevel === FILLED_LEVEL) {
      return;
    }
    if (timer) {
      clearTimer();
    }
    //Action first
    setIsAnimating(true);
    setWaterLevel((level) => level + 1);
    //Then setInterval
    timer = setInterval(() => {
      setIsAnimating(true);
      setWaterLevel((level) => level + 1);
    }, 2000);
  };

  const handleEmptyWater = () => {
    if (waterLevel === EMPTY_LEVEL) {
      return;
    }
    if (timer) {
      clearTimer();
    }
    //Action first
    setWaterLevel((level) => level - 1);
    //Then setInterval
    timer = setInterval(() => {
      setWaterLevel((level) => level - 1);
    }, 2000);
  };

  useEffect(() => {
    if (waterLevel <= EMPTY_LEVEL || waterLevel >= FILLED_LEVEL) {
      clearTimer();
    }
  }, [waterLevel]);

  return (
    <div className="App">
      <BathTub isAnimating={isAnimating} waterLevel={waterLevel}/>
      <div>
        <Button text="Empty Water" onClick={handleEmptyWater} />
        <Button text="Fill Water" onClick={handleFillWater} />
      </div>
    </div>
  );
}

export default App;
