import { lazy } from "react";

const MyComponent = lazy(() => import("./MyComponent"));

function App() {
  return <MyComponent />;
}

export default App;
