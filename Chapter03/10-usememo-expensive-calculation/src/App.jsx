import React, { useState, useMemo } from "react";

function expensiveCalculation(multiplier) {
  console.log("Running expensive calculation...");

  let result = 0;
  for (let i = 0; i < 500000000; i++) {
    result += i * multiplier;
  }

  return result;
}

function ExpensiveComponent() {
  const [multiplier, setMultiplier] = useState(1);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);

  const expensiveResult = useMemo(() => {
    setLoading(true);

    const start = performance.now();
    const result = expensiveCalculation(multiplier);
    const end = performance.now();

    setTimeout(() => {
      setLoading(false);
      console.log(`Finished in ${(end - start).toFixed(0)}ms`);
    }, 2000);

    return result;
  }, [multiplier]);

  return (
    <div>
      <h2>useMemo Example</h2>

      <div>
        <p>Expensive Result:</p>
        {loading ? (
          <p>Calculating expensive result...</p>
        ) : (
          <p>{expensiveResult.toLocaleString()}</p>
        )}
      </div>

      <div>
        <button onClick={() => setMultiplier((prev) => prev + 1)}>
          Change Multiplier ({multiplier}) - Triggers Recalculation
        </button>
      </div>
      <div>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Increment Counter ({counter}) - No Recalculation
        </button>
      </div>
    </div>
  );
}

export default ExpensiveComponent;
