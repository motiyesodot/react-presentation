import { useEffect, useState } from 'react';

function heavyCalculation(num: number): number {
  let result = 0;
    console.log("🔥 heavyCalculation RUNNING");

  // חישוב כבד בכוונה
  for (let i = 0; i < 1_000_000_000; i++) {
    result += num;
  }

  return result;
}

export default function useHeavyCalculation() {
  const [number, setNumber] = useState(1);
  const [calculatedValue, setCalculatedValue] = useState(0);

  console.log("rendur");
  
  useEffect(() => {
    // console.log("🔥 heavyCalculation RUNNING");
    setCalculatedValue(heavyCalculation(number))
  }, [number]);

  return [number, () => setNumber(prev => prev + 1), calculatedValue] as const;
}
