import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export default function Checkboxes() {
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("First");

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ minWidth: 250 }}>
        <FormControlLabel
          label={`Checkbox ${checkbox ? "(checked)" : "(unchecked)"}`}
          control={
            <Checkbox
              checked={checkbox}
              onChange={() => setCheckbox(!checkbox)}
            />
          }
        />
      </Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">{radio}</FormLabel>
        <RadioGroup value={radio} onChange={(e) => setRadio(e.target.value)}>
          <FormControlLabel value="First" label="First" control={<Radio />} />
          <FormControlLabel value="Second" label="Second" control={<Radio />} />
          <FormControlLabel value="Third" label="Third" control={<Radio />} />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
