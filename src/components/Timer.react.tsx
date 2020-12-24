import './Timer.css';
import { useEffect, useState, ReactElement } from 'react';

interface TimerProps {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

// given: time in seconds, function calculates how much time is left in days, minutes, seconds
function calculateTimeLeft(timeSeconds: number): TimerProps {
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

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

function Timer({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}: TimerProps): ReactElement {
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

  return (
    <div>
      {timeSeconds > 0 ? (
        Object.entries(timeLeft).flatMap(([interval, time]) => (
          <span>
            {time} {interval}{' '}
          </span>
        ))
      ) : (
        <span>Time is up!</span>
      )}
    </div>
  );
}

export default Timer;
