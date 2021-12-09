import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([])
  
  const fetchNotes = () => {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(notesData => {
      console.log(notesData)
      setNotes(notesData)
    })
  }
  useEffect(fetchNotes, [])

  
  return (
    <>
      <Search />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default NoteContainer;
