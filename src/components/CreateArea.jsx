import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

// const [content, setContent] = useState("");
// const [title, setTitle] = useState("");

function CreateArea(props) {
  // create a state to keep track of the content and title
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  const[isTitleOpen, setisTitleOpen] = useState(false);

  // a function that handel/save the event of the user input
  function handelChange(event) {
    const { name, value } = event.target;

        // if (name === "title") {
    //   setTitle(value);
    // } else if (name === "content") {
    //   setContent(value);
    // }

    setNotes((prevnote) => {
      return { ...prevnote, [name]: value };
    });
  }



// a function to pass the data to the app
  function notetext(event) {
    event.preventDefault();

    //passing the function from the app using props
    props.onChange(notes);

    // clear the input 
    setNotes({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className="create-note">
      {/* true && something → shows something
      false && something → shows nothing */}
        {isTitleOpen && (<input 
          onChange={handelChange}
          name="title"
          placeholder="Title"
          value={notes.title}
         
        />)}
          
  
        
        <textarea onClick = {()=>{
          console.log("Clicked!");
           setisTitleOpen(true);
        }}
          onChange={handelChange}
          name="content"
          placeholder="Take a note..."
          rows={isTitleOpen ? 3 : 1}
          value={notes.content}
        />
        {isTitleOpen &&(<Zoom in = {true}>
          <Fab onClick={notetext}><AddIcon/></Fab>
        </Zoom>)}
        
      </form>
    </div>
  );
}

export default CreateArea;
