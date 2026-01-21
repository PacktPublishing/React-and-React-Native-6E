import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <section>
    <header>
      <h1>A Header</h1>
    </header>
    <nav>
      <a href="item">Nav Item</a>
    </nav>
    <main>
      <p>The main content...</p>
    </main>
    <footer>
      <small>&copy; All rights reserved</small>
    </footer>
  </section>
);
