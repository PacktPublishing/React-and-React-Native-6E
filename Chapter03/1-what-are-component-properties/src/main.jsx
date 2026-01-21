import { createRoot } from "react-dom/client";
import MyComponent from "./MyComponent";

createRoot(document.getElementById("root")).render(
  <section>
    <MyComponent
      title="Welcome to My App"
      description="This is a sample component."
    />
  </section>
);
