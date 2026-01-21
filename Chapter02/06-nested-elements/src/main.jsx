import { createRoot } from "react-dom/client";
import MyButton from "./MyButton";
import MySection from "./MySection";

createRoot(document.getElementById("root")).render(
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>
);
