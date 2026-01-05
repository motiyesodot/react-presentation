import { useEffect, useState } from 'react'

export default function useTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(prev => prev + 1);
      console.log("timer start");
    }, 1000);

    return () => {clearInterval(id); console.log("timer stop");
    }
  }, []);

  return [seconds]
};