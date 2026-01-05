import React from 'react';
import { useCounterRefState } from '../hooks/useCounterRefState';

export default function CounterRefState() {
  const [countS, addOneS, countR, addOneR] = useCounterRefState();
  return (
    <div>
      <h3>State Value: {countS}</h3>
      <h3>Ref Value: {countR}</h3>
      <button onClick={addOneS}>Increment State</button>
      <button onClick={addOneR}>Increment Ref</button>
    </div>
  );
}
