import { lazy } from "react";

const MyFeature = lazy(() => import("./MyFeature"));

function MyPage() {
  return (
    <>
      <h1>My Page</h1>
      <MyFeature />
    </>
  );
}

export default MyPage;
