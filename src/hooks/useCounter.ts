import { useState, useCallback } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  const addOne = useCallback(() => {
    setCount(c => c + 1);
    console.log("clicked");
  }, []);

  return [ count, addOne, setCount ] as const;
}
