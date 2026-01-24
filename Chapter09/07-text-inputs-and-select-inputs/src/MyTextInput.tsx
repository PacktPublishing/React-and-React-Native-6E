import { useState } from "react";
import { TextField } from "@mui/material";

export default function MyTextInput() {
  const [value, setValue] = useState<string>('');

  return (
    <TextField
      label="Name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      margin="normal"
    />
  );
}
