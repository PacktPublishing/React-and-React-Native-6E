import { createRoot } from "react-dom/client";
import EventPropagationDemo from "./EventPropagation";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <EventPropagationDemo />
  </>
);
