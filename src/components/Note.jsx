import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from '@mui/material/Card';

function Note(props) {
  return (
    <Card className={`note ${props.onMode ? "dark" : ""}`}>
      <h1>{props.title}</h1>
      <hr/>
      <br/>
      <p>{props.content}</p>

      <button
        onClick={() => {
          return props.onDelete(props.id);
        }}
        className={props.onMode ? "dark" : ""}
      >
       <DeleteIcon/>
      </button>
    </Card>
  );
}

export default Note;