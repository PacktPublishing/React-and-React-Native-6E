import { Suspense } from "react";
import { FadeLoader } from "react-spinners";
import MyPage from "./MyPage";

function App() {
  return (
    <Suspense fallback={<FadeLoader color={"lightblue"} />}>
      <MyPage />
    </Suspense>
  );
}

export default App;
