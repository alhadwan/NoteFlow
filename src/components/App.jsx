import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import CssBaseline from "@mui/material/CssBaseline";


function App() {
  
  const [notes, setNotes] = useState([]);
  const [mode, setMode] = useState(false);
  
 // Add note if title and content are not empty
  function handleAddNotes(userInput, setError) {
    if(userInput.title.trim() === "" || userInput.content.trim() === ""){
      setError(true);
    }else{
      setNotes((prevItems) => [...prevItems, userInput]);
      setError(false);
    }
    
  }
  // Delete note by index
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  // Toggle dark/light mode
  function toggleDarkMode(){
    setMode((prevMod)=>{
      return !prevMod
    })
  }

  return (
    <div className={`app-wrapper ${mode ? "dark" : ""}`} >
      <CssBaseline />
      <Header onMode={mode} onToggle={toggleDarkMode} />
      <main>
        <CreateArea onChange={handleAddNotes} onMode={mode}/>
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
            onMode={mode}
          />
        );
      })}
      </main>
      <Footer onMode={mode}/>
    </div>
  );
}

export default App;
