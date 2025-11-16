import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
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
