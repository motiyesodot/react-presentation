import { useMemo, useState } from 'react';

function heavyCalculation(num: number): number {
  let result = 0;

  // חישוב כבד בכוונה
  for (let i = 0; i < 1_000_000_000; i++) {
    result += num;
  }

  return result;
}

export default function useHeavyCalculation() {
  const [number, setNumber] = useState(1);

  const calculatedValue = useMemo(() => {
    console.log('🔥 useMemo RUNNING');
    return heavyCalculation(number);
  }, [number]);

  return [number, () => setNumber(prev => prev + 1), calculatedValue] as const;
}
