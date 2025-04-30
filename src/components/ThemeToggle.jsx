import React from "react";
import Switch from "@mui/material/Switch";


function ThemeToggle(props) {
    return(
    <Switch sx={{ float: "right", margin: "-40px 5px" }}

    // If dark, the switch appears ON (dark mode is enabled)
    // If light, the switch appears OFF (light mode)
  checked={props.mode === "dark"}
  // update React state based on its previous value
  // If it's "light", switch it to "dark"
  // If it's "dark", switch it to "light"
  onChange={() => props.setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))}
  />
);}
export default ThemeToggle;