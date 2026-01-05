import { useState } from 'react';

export const useToggle = (t = true) => {
  const [value, setToggle] = useState(t);

  const toggle = () => setToggle((p) => !p);

  return [value, toggle] as const;

};
