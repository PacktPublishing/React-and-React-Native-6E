import { createRoot } from "react-dom/client";
import MyButton from "./MyButton";

const root = createRoot(document.getElementById("root"));
root.render(<MyButton>Click Me</MyButton>);
