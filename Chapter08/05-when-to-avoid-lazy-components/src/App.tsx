import { lazy, Suspense, useState } from "react";

const First = lazy(() => import("./First"));
const Second = lazy(() => import("./Second"));

function ShowComponent({ name }: { name: string }) {
  switch (name) {
    case "first":
      return <First />;
    case "second":
      return <Second />;
    default:
      return null;
  }
}

function App() {
  const [component, setComponent] = useState("");

  return (
    <>
      <label>
        Load Component:{" "}
        <select
          value={component}
          onChange={(e) => setComponent(e.target.value)}
        >
          <option value="">None</option>
          <option value="first">First</option>
          <option value="second">Second</option>
        </select>
      </label>
      <Suspense fallback={<p>loading...</p>}>
        <ShowComponent name={component} />
      </Suspense>
    </>
  );
}

export default App;
