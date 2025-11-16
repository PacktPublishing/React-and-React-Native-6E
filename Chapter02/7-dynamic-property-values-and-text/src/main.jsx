import {createRoot} from "react-dom/client";

const enabled = false;
const text = "A Button";
const placeholder = "input value...";
const size = 50;

const root = createRoot(document.getElementById("root"));

root.render(
  <section>
    <button disabled={!enabled}>{text}</button>
    <input placeholder={placeholder} size={size} />
  </section>
);
