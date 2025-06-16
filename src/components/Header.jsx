import React from "react";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ThemeToggle from "./ThemeToggle";

function Header(props) {
  return (
    <header className={props.onMode ? "dark" : ""}>
      <h1>
      <SpeakerNotesIcon/>
      NoteFlow
        </h1>
        <ThemeToggle {...props}/>
    </header>
  );
}
export default Header;
