import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  
  const [items, setItems] = useState([]);
  const [mode, setMode] = useState(false);
  
  
  function addItem(notes, setError) {
    if(notes.title.trim() === "" || notes.content.trim() === ""){
      setError(true);
    }else{
      setItems((prevItems) => [...prevItems, notes]);
      setError(false);
    }
    
  }

  function deleteNote(id) {
    setItems((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  function modeToggle(){
    setMode((prevMod)=>{
      return !prevMod
    })
  }

  return (
    <div className={`app-wrapper ${mode ? "dark" : ""}`} >
      <CssBaseline />
      <Header onMode={mode} onToggle={modeToggle} />
      <main>
        <CreateArea onChange={addItem} onMode={mode}/>
      {items.map((item, index) => {
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
