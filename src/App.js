import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  
    const calculateTimeLeft = () => {
      let year = new Date().getFullYear();
      const difference = +new Date(`12/29/${year}`) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
          };
      }

    return timeLeft;

    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }

      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });

    return (
      <div>
        <h1>HacktoberFest 2020 Countdown</h1>
        <h2>With React Hooks!</h2>  
      {timerComponents.length ? timerComponents : <span>Times up!</span>}
   </div>  
  );
}

export default App;
