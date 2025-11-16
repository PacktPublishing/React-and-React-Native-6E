import {createRoot} from "react-dom/client";

const handleClick = () => {
  console.log("Button clicked!");
};

const root = createRoot(document.getElementById("root"));

root.render(
  <section>
    <button onClick={handleClick}>Click me</button>
  </section>
);
