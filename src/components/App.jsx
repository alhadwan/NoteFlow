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
  
  function addItem(notes) {
    setItems((prevItems) => [...prevItems, notes]);
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
      <Header onToggle = {modeToggle} />
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
      <Footer />
    </div>
  );
}

export default App;
