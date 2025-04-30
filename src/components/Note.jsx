import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function Note(props) {
  return (
    <Card className="note">
      <h1>{props.title}</h1>
      <hr/>
      <br/>
      <p>{props.content}</p>
      {/* //<p>{props.id}</p> */}
      {/* //calling the onDelete function from the app */}
      <button
        onClick={() => {
          return props.onDelete(props.id);
        }}
      >
       <DeleteIcon/>
      </button>
    </Card>
  );
}

export default Note;

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.
