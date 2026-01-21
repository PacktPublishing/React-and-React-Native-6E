import { createRoot } from "react-dom/client";

function MyComponent() {
  return (
    <section>
      <h1>My Component</h1>
      <p>Content in my component...</p>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<MyComponent />);
