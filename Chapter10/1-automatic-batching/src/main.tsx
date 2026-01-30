import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BatchingUpdates from "./BatchingUpdates";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BatchingUpdates />
  </StrictMode>,
);
