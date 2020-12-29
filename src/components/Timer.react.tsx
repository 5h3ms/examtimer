import './Timer.css';
import {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
  ForwardRefRenderFunction,
  useCallback,
} from 'react';
import { Button } from '@material-ui/core';

interface TimeProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// given: time in seconds, function calculates how much time is left in days, minutes, seconds
function calculateTimeLeft(timeSeconds: number): TimeProps {
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

interface TimerProps extends Partial<TimeProps> {
  index: number;
  onClose: (index: number) => void;
}

type TimerHandle = {
  setPaused: (paused: boolean) => void;
};

const Timer: ForwardRefRenderFunction<TimerHandle, TimerProps> = (
  { days = 0, hours = 0, minutes = 0, seconds = 0, index, onClose }: TimerProps,
  ref,
) => {
  const [isPaused, setIsPaused] = useState(true);

  useImperativeHandle(
    ref,
    () => ({
      setPaused(paused) {
        setIsPaused(paused);
      },
    }),
    [setIsPaused],
  );
  const [timeSeconds, setTimeSeconds] = useState(
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds,
  );
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(timeSeconds));

  const onReset = useCallback(() => {
    setIsPaused(true);
    setTimeSeconds(
      days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds,
    );
  }, [days, hours, minutes, seconds, setIsPaused]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(timeSeconds));
  }, [timeSeconds]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (!isPaused) {
      timer = setInterval(() => {
        setTimeSeconds((difference) => difference - 1);
      }, 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isPaused]);

  const onSetPausePlay = useCallback(() => {
    setIsPaused((isPaused) => !isPaused);
  }, []);

  const onDelete = useCallback(() => {
    onClose(index);
  }, [onClose, index]);

  return (
    <div>
      {timeSeconds > 0 ? (
        Object.entries(timeLeft).flatMap(([interval, time]) => {
          if (time > 0)
            return (
              <span key={interval}>
                {time} {interval}{' '}
              </span>
            );
        })
      ) : (
        <span>Time is up!</span>
      )}
      <Button onClick={onSetPausePlay}>{isPaused ? 'Play' : 'Pause'}</Button>
      <Button onClick={onReset}>Reset</Button>
      <Button onClick={onDelete}>Close</Button>
    </div>
  );
};

export default forwardRef(Timer);
