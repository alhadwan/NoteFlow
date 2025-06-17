import React from "react";

function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <footer className={props.onMode ? "dark" : ""}>
      <p>Copyright ⓒ {year} NoteFlow</p>
    </footer>
  );
}

export default Footer;
