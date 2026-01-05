import { useEffect, useState } from "react";

function heavyCalculation(num: number): number {
  
  let result = 0;

  // חישוב כבד בכוונה
  for (let i = 0; i < 1_000_000_000_0; i++) {
    result += num;
  }

  return result;
}

export default function UseMemoPage() {
  const [number, setNumber] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [calculatedValue, setCalculatedValue] = useState(0);


  
  // //ירוץ רק פעם אחת - בהרצת הקומפוננטה
  useEffect(() => {
    console.log("🔥 heavyCalculation RUNNING");
    setCalculatedValue(heavyCalculation(number))
  }, [number]);
  
  console.log("rendur");

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

      <button onClick={() => setNumber((prev) => prev + 1)}>
        ➕ Change Number
      </button>

      <br />
      <br />

      <button onClick={() => setDarkMode((prev) => !prev)}>
        🌗 Toggle Theme
      </button>
    </div>
  );
}