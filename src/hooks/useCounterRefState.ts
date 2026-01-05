import { useState, useRef } from 'react';

export function useCounterRefState() {
  const [countS, setCount] = useState(0);
  const countR = useRef(0);

  const addOneR = () => {
    countR.current = countR.current + 1;
    console.log(`ref value: ${countR.current}`);
  };

  const addOneS = () => {
    setCount((c) => c + 1);
  };

  return [countS, addOneS, countR.current, addOneR] as const;
}
