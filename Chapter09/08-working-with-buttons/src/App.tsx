import AndroidIcon from "@mui/icons-material/Android";
import { Button, IconButton, Stack } from "@mui/material";
import { useState } from "react";

type ButtonColor = "primary" | "secondary";

export default function App() {
  const [color, setColor] = useState<ButtonColor>("secondary");

  const handleUpdateColor = () => {
    setColor(color === "secondary" ? "primary" : "secondary");
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color={color} onClick={handleUpdateColor}>
        Contained
      </Button>

      <Button color={color} onClick={handleUpdateColor}>
        Text
      </Button>

      <Button variant="outlined" color={color} onClick={handleUpdateColor}>
        Outlined
      </Button>

      <IconButton color={color} onClick={handleUpdateColor}>
        <AndroidIcon />
      </IconButton>
    </Stack>
  );
}
