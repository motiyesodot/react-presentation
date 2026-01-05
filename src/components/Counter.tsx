import { useCounter } from '../hooks/useCounter';
import { memo } from "react";



const Child = memo(({ onClick }: {onClick: () => void}) => {
  console.log("👶 Child render");
  return <button onClick={onClick}>Child button</button>;
});

export default function Counter() {
    const [ count, addOne, setCount ] = useCounter();

  return (
      <div>
      <h1>Count: {count}</h1>
      
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <Child onClick={addOne} />
    </div>
  );
}
