import React from "react";
import Switch from "@mui/material/Switch";

function ThemeToggle(props) {

    return(
    <Switch sx={{ float: "right", margin: "-40px 5px" }}
        onClick={props.onToggle}
    />
);}
export default ThemeToggle;