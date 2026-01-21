import { createRoot } from "react-dom/client";

import WithFragments from "./WithFragments";
import WithoutFragments from "./WithoutFragments";

createRoot(document.getElementById("root")).render(
  <div>
    <WithoutFragments />
    <WithFragments />
  </div>
);
