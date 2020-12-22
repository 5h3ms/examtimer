import './Timer.css';
import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

// given: time in seconds, function calculates how much time is left in days, minutes, seconds
function calculateTimeLeft(timeSeconds) {
  let timeLeft = {};

  if (timeSeconds > 0) {
    timeLeft = {
      days: Math.floor(timeSeconds / (60 * 60 * 24)),
      hours: Math.floor((timeSeconds / (60 * 60)) % 24),
      minutes: Math.floor((timeSeconds / 60) % 60),
      seconds: Math.floor(timeSeconds % 60),
    };
  }

  return timeLeft;
}

//function creates span for days, minutes, hours and seconds
function updateUI(timeLeft) {
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    );
  });

  return timerComponents;
}

function Timer({ days = 0, hours = 0, minutes = 0, seconds = 0 }) {
  const [timeSeconds, setTimeSeconds] = useState(
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds,
  );
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(timeSeconds));

  useEffect(() => {
    setTimeSeconds(
      days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds,
    );
    const timer = setInterval(() => {
      setTimeSeconds((difference) => difference - 1);
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [days, hours, minutes, seconds]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(timeSeconds));
  }, [timeSeconds]);

  const timerComponents = useMemo(() => updateUI(timeLeft), [timeLeft]);

  return (
    <div>
      <h1>HacktoberFest 2020 Countdown</h1>
      <h2>With React Hooks!</h2>
      {timerComponents.length ? timerComponents : <span>Time is up!</span>}
    </div>
  );
}

Timer.propTypes = {
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

export default Timer;
