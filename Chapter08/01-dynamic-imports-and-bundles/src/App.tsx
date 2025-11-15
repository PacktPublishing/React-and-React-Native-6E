import { useEffect, useState, type ReactNode } from "react";

function App() {
  const [MyComponent, setMyComponent] = useState<() => ReactNode>(
    () => () => null
  );

  useEffect(() => {
    import("./MyComponent").then((module) => {
      setMyComponent(() => module.default);
    });
  }, []);

  return <MyComponent />;
}

export default App;
