import React, { useState } from 'react';
import TimerButton from '../TimerButton/TimerButton';

interface TimerButtonsProps {
  setTimeInSeconds: any;
}

const TimerButtons: React.FC<TimerButtonsProps> = ({ setTimeInSeconds }) => {
  const [intervalId, setIntervalId] = useState<number>(0);

  const startTimer = () => {
    const interval: any = setInterval(() => {
      setTimeInSeconds((prevState: number) => prevState + 1);
    }, 1000);

    setIntervalId(interval);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const resetTimer = () => {
    stopTimer();
    setTimeInSeconds(0);
  };

  return (
    <>
      <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
      <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
      <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
    </>
  );
};

export default TimerButtons;
