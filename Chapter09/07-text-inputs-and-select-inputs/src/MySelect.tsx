import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function MySelect() {
  const [value, setValue] = useState<string>('');

  return (
    <FormControl>
      <InputLabel id="select-label">My Select</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        label="My Select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        inputProps={{ id: "my-select" }}
      >
        <MenuItem value="first">First</MenuItem>
        <MenuItem value="second">Second</MenuItem>
        <MenuItem value="third">Third</MenuItem>
      </Select>
    </FormControl>
  );
}
