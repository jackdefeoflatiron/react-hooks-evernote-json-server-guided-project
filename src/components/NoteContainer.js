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
  const [newNotes, setNewNotes] = useState([])
 
  const searchNotes = (e) => {
    console.log(e.target.value)
    setSearchInput(e.target.value)
    setNewNotes(notes.filter(notes => {return  notes.title.includes(searchInput) }))
  }
  console.log(searchInput)
  
  return (
    <>
      <Search 
      searchNotes={searchNotes}
      notes={notes}/>
      <div className="container">
        <Sidebar 
        
        notes={notes}
        />
        <Content />
      </div>
    </>
  );
}

export default NoteContainer;
