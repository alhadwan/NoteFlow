import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";



function CreateArea(props) {

  const [userInput, setUserInput] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState(false)
  const[isTitleOpen, setIsTitleOpen] = useState(false);

  // handle/save the event of the user input
  function handleChange(event) {
    const { name, value } = event.target;
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [name]: value };
    });
  }

  //pass the data to the app as props
  function userInputHandler(event) {
    event.preventDefault();
    props.onChange(userInput, setError);
    setUserInput({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className={`create-note ${props.onMode ? "dark" : ""}`}>
        {isTitleOpen && (<input 
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={userInput.title}
          className={props.onMode ? "dark" : ""}
        />)}
          
        <textarea onClick = {()=>{
          console.log("Clicked!");
           setIsTitleOpen(true);
        }}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isTitleOpen ? 2 : 1}
          value={userInput.content}
          className={props.onMode ? "dark" : ""}
        />

        {error && <p style={{color: "red"}}>Please enter a note</p>}

        {isTitleOpen &&(<Zoom in = {true}>
          <Fab onClick={userInputHandler}><AddIcon/></Fab>
        </Zoom>)}
      </form>
    </div>
  );
}

export default CreateArea;
