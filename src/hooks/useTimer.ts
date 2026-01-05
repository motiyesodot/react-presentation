import { useEffect, useState } from 'react'

export default function useTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds + 1);
      console.log("timer start");
    }, 1000);

  }, []);

  return seconds
};