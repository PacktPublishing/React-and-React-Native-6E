import { Suspense } from "react";
import MyPage from "./MyPage";

function App() {
  return (
    <Suspense fallback={"loading..."}>
      <MyPage />
    </Suspense>
  );
}

export default App;
