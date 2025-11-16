import {createRoot} from "react-dom/client";

import WithoutFragments from "./WithoutFragments";
import WithFragments from "./WithFragments";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <WithoutFragments />
    <WithFragments />
  </div>
);
