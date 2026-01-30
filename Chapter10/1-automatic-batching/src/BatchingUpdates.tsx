import { useState } from "react";

export default function BatchingUpdates() {
  const [value, setValue] = useState("loading...");

  function handleStart() {
    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        setValue(`value ${i + 1}`);
        console.log(`value ${i + 1}`);
      }
    }, 1);
  }

  return (
    <div>
      <p>
        Value: <em>{value}</em>
      </p>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
