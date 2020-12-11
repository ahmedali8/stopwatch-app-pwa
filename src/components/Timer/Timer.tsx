import React, { useState, useEffect } from 'react';

function Timer() {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);

  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const calculateTime: (time: number) => void = (time: number) => {
    let hours: number, minutes: number, seconds: number;

    hours = Math.floor(time / 3600);
    minutes = Math.floor((time - hours * 3600) / 60);
    seconds = Math.floor(time - hours * 3600 - minutes * 60);

    setHours(hours < 10 ? +`0${hours}` : +hours);
    setMinutes(minutes < 10 ? +`0${minutes}` : +minutes);
    setSeconds(seconds < 10 ? +`0${seconds}` : +seconds);
  };

  useEffect(() => {
    calculateTime(timeInSeconds);
  }, [timeInSeconds]);

  return (
    <div>
      <section className="timer-container">
        <p className="hours">{hours}</p>
        <p className="minutes">{minutes}</p>
        <p className="seconds">{seconds}</p>
      </section>
    </div>
  );
}

export default Timer;
