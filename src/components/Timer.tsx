import useTimer from "../hooks/useTimer";

export default function Timer() {
  const [seconds] = useTimer();

  return <h1>{seconds}</h1>;
};