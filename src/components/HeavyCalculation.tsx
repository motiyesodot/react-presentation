import useHeavyCalculation from "../hooks/useHeavyCalculation";
import { useToggle } from "../hooks/useToggle";

export default function HeavyCalculation() {
    const [darkMode, setDarkMode] = useToggle(false);
    const [number, setNumber, calculatedValue] = useHeavyCalculation();

  return (
    <div
      style={{
        background: darkMode ? "#111" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: 40,
      }}
    >
      <h1>useMemo Demo</h1>
      <h2>Number: {number}</h2>
      <h3>Calculated Value: {calculatedValue}</h3>

      <button onClick={() => setNumber()}>
        ➕ Change Number
      </button>

      <br />
      <br />

      <button onClick={() => setDarkMode()}>
        🌗 Toggle Theme
      </button>
    </div>
  );
}
