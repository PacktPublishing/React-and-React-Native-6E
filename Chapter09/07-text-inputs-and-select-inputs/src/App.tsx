import { FormGroup } from "@mui/material";
import MySelect from "./MySelect";
import MyTextInput from "./MyTextInput";

export default function App() {
  return (
    <FormGroup style={{ width: 200, margin: 10 }}>
      <MyTextInput />
      <MySelect />
    </FormGroup>
  );
}
