import { createRoot } from "react-dom/client";
import { createElement } from "react";

const root = createRoot(document.getElementById("root"));

root.render(
  createElement(
    "p",
    null,
    "Hello, ",
    createElement("strong", null, "JSX")
  )
);
