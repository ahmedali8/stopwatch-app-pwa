import React, { useState, useEffect } from 'react';
import TimerButtons from '../TimerButtons/TimerButtons';
import './Timer.css';

function Timer() {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);

  const [hours, setHours] = useState<number | string>(0);
  const [minutes, setMinutes] = useState<number | string>(0);
  const [seconds, setSeconds] = useState<number | string>(0);

  const calculateTime: (time: number) => void = (time: number) => {
    let hours: number, minutes: number, seconds: number;

    hours = Math.floor(time / 3600);
    minutes = Math.floor((time - hours * 3600) / 60);
    seconds = Math.floor(time - hours * 3600 - minutes * 60);

    setHours(hours < 10 ? `0${hours}` : hours);
    setMinutes(minutes < 10 ? `0${minutes}` : minutes);
    setSeconds(seconds < 10 ? `0${seconds}` : seconds);
  };

  useEffect(() => {
    calculateTime(timeInSeconds);
  }, [timeInSeconds]);

  return (
    <div>
      <section className="timer-container">
        <p className="hours">{hours}</p>
        <span>:</span>
        <p className="minutes">{minutes}</p>
        <span>:</span>
        <p className="seconds">{seconds}</p>
      </section>
      <section className="timer-btn-container">
        <TimerButtons setTimeInSeconds={setTimeInSeconds} />
      </section>
    </div>
  );
}

export default Timer;
