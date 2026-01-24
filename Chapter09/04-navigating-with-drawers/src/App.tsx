import {
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

const links = [
  { url: "/first", name: "First Page" },
  { url: "/second", name: "Second Page" },
  { url: "/third", name: "Third Page" },
];

export default function App() {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = ({ type, key }: { type?: string; key?: string }) => {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }

    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <Button onClick={handleToggleDrawer}>Open Nav</Button>
      <section>
        <Routes>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </section>
      <Drawer open={open} onClose={handleToggleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={handleToggleDrawer}
          onKeyDown={handleToggleDrawer}
        >
          <List component="nav">
            {links.map((link) => (
              <NavLink
                key={link.url}
                to={link.url}
                style={{ color: "black", textDecoration: "none" }}
              >
                {({ isActive }) => (
                  <ListItemButton selected={isActive}>
                    <ListItemText primary={link.name} />
                  </ListItemButton>
                )}
              </NavLink>
            ))}
          </List>
        </div>
      </Drawer>
    </BrowserRouter>
  );
}
