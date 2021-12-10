import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer({NoteItem}) {
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

  const [searchInput, setSearchInput] = useState("")
  
 
  
  const newNotes = notes.filter(note => note.title.toLowerCase().includes(searchInput.toLowerCase()))
  
  console.log(searchInput)
  console.log(newNotes)

  return (
    <>
      <Search 
      setSearchInput={setSearchInput}
      />
      <div className="container">
        <Sidebar 
        
        notes={newNotes}
        />
        <Content />
      </div>
    </>
  );
}

export default NoteContainer;
