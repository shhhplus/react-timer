import { FC, useEffect, useRef } from 'react';
import createTimer from '@shhhplus/timer.js';

type TimerProps = Parameters<typeof createTimer>[0];

const Timer: FC<TimerProps> = ({ interval, onElapsed }) => {
  const onElapsedRef = useRef(onElapsed);

  useEffect(() => {
    onElapsedRef.current = onElapsed;
  }, [onElapsed]);

  useEffect(() => {
    if (!interval) {
      return;
    }

    const timer = createTimer({
      onElapsed: () => {
        if (onElapsedRef.current) {
          return onElapsedRef.current();
        }
      },
      interval,
    });
    timer.start();

    return () => {
      timer.stop();
    };
  }, [interval]);

  return null;
};

export default Timer;
