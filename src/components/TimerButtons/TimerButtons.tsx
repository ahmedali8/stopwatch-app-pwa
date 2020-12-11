import React, { useState } from 'react';
import TimerButton from '../TimerButton/TimerButton';

interface TimerButtonsProps {
  setTimeInSeconds: any;
}

const TimerButtons: React.FC<TimerButtonsProps> = ({ setTimeInSeconds }) => {
  const [intervalId, setIntervalId] = useState<number>(0);

  const [isStartBtnClicked, setIsStartBtnClicked] = useState<boolean>(false);
  const [isStopBtnClicked, setIsStopBtnClicked] = useState<boolean>(false);
  const [isResetBtnClicked, setIsResetBtnClicked] = useState<boolean>(false);

  const startTimer = () => {
    const interval: any = setInterval(() => {
      setTimeInSeconds((prevState: number) => prevState + 1);
    }, 1000);

    setIntervalId(interval);
    setIsStartBtnClicked(true);

    setIsStopBtnClicked(false);
    setIsResetBtnClicked(false);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsStopBtnClicked(true);

    setIsStartBtnClicked(false);
    setIsResetBtnClicked(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTimeInSeconds(0);
    setIsResetBtnClicked(true);

    setIsStopBtnClicked(false);
    setIsStartBtnClicked(false);
  };

  return (
    <div>
      <TimerButton
        btnId={'start-timer'}
        buttonAction={startTimer}
        buttonValue={'Start'}
        disableBtn={isStartBtnClicked}
      />
      <TimerButton
        btnId={'stop-timer'}
        buttonAction={stopTimer}
        buttonValue={'Stop'}
        disableBtn={isStopBtnClicked}
      />
      <TimerButton
        btnId={'reset-timer'}
        buttonAction={resetTimer}
        buttonValue={'Reset'}
        disableBtn={isResetBtnClicked}
      />
    </div>
  );
};

export default TimerButtons;
