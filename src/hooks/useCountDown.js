import { useEffect, useRef, useState } from "react";

export const useCountDown = (total = 2, ms = 1000) => {
  const [counter, setCountDown] = useState(total);
  const [startCountDown, setStartCountDown] = useState(false);
  const intervalId = useRef();

  const start = () => setStartCountDown(true);

  //   const pause = () => setStartCountDown(false);

  const reset = () => {
    clearInterval(intervalId.current);
    setStartCountDown(false);
    setCountDown(total);
  };

  useEffect(() => {
    intervalId.current = setInterval(() => {
      startCountDown && counter > 0 && setCountDown((counter) => counter - 1);
    }, ms);

    if (counter === 0) clearInterval(intervalId.current);

    return () => clearInterval(intervalId.current);
  }, [startCountDown, counter, ms]);

  return [counter, start, reset];
};
