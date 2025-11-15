import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import { Box } from "@mui/material";

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
