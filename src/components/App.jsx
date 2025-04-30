import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  // adding state to keep track of the noteitems array
  const [items, setItems] = useState([]);

  const[mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });


    // this function helps passing the data from ->
    //the CreateArea to app and the data to an array
  function addItem(notes) {
    setItems((prevItems) => [...prevItems, notes]);
  }
// delet the array notes using the id when Click on delet
  function deleteNote(id) {
    setItems((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} setMode={setMode} />
      {/* creating a prop to pass to the CreateArea */}
      <CreateArea onChange={addItem} />
      {/* looping through the array items and display them, in the h1 and p */}
      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
