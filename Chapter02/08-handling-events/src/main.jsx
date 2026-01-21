import { createRoot } from "react-dom/client";

const handleClick = () => {
  console.log("Button clicked!");
};

createRoot(document.getElementById("root")).render(
  <section>
    <button onClick={handleClick}>Click me</button>
  </section>
);
