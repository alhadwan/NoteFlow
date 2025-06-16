import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";



function CreateArea(props) {
  console.log(props)

  // create a state to keep track of the content and title
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  const [error, setError] = useState(false)

  const[isTitleOpen, setisTitleOpen] = useState(false);

  // a function that handel/save the event of the user input
  function handelChange(event) {
    const { name, value } = event.target;


    setNotes((prevnote) => {
      return { ...prevnote, [name]: value };
    });
  }



// a function to pass the data to the app
  function notetext(event) {
    event.preventDefault();

    //passing the function from the app using props
    props.onChange(notes, setError);

    // clear the input 
    setNotes({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className={`create-note ${props.onMode ? "dark" : ""}`}>
      
        {isTitleOpen && (<input 
          onChange={handelChange}
          name="title"
          placeholder="Title"
          value={notes.title}
          className={props.onMode ? "dark" : ""}
         
        />)}
          
        <textarea onClick = {()=>{
          console.log("Clicked!");
           setisTitleOpen(true);
        }}
          onChange={handelChange}
          name="content"
          placeholder="Take a note..."
          rows={isTitleOpen ? 2 : 1}
          value={notes.content}
          className={props.onMode ? "dark" : ""}
        />

        {error && <p style={{color: "red"}}>Please enter a note</p>}

        {isTitleOpen &&(<Zoom in = {true}>
          <Fab onClick={notetext}><AddIcon/></Fab>
        </Zoom>)}
        
      </form>
    </div>
  );
}

export default CreateArea;
