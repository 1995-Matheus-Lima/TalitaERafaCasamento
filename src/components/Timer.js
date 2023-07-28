import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div id= "container_contador">
      <h1>Contagem Regressiva</h1>
      <ul>
      <li> <h2>{`${timeLeft.days}`}</h2> <h2>Dias</h2> </li>
      <li> <h2>{`${timeLeft.hours}`}</h2> <h2>Horas</h2> </li>
      <li> <h2>{`${timeLeft.minutes}`}</h2> <h2>Minutos</h2> </li>
      <li> <h2>{`${timeLeft.seconds}`}</h2> <h2>Segundos</h2> </li>
    </ul>
    </div>
  );
};

export default CountdownTimer;
