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

  const [searchInput, setSearchInput] = useState("")

  
 
  
  const newNotes = notes.filter(note => note.title.toLowerCase().includes(searchInput.toLowerCase()))
  
  

  const [viewedNote, setViewedNote] = useState("")
  const [viewerState, setViewerState] = useState(null)
  const [viewNote, setViewNote] =useState([])

  console.log(viewNote)
 
  

 const createNewNote =() => {
    fetch("http://localhost:3000/notes",
    {
      method : "POST",
      headers : {"Content-Type" :  "application/json"},
      body: JSON.stringify({
        title: "default",
        body : "Write New Note"
      })
    }) 
    .then(res=>res.json())
    .then((data)=> setNotes([...notes, data]))


  }

  return (
    <>
      <Search 
      setSearchInput={setSearchInput}
      />
      <div className="container">
        <Sidebar 
        createNewNote={createNewNote}
        setViewedNote={setViewedNote}
        notes={newNotes}
        setViewerState={setViewerState}
        setViewNote={setViewNote}
        />
        <Content
        setViewNote={setViewNote} 
        viewedNote={viewedNote}
        viewerState={viewerState}
        setViewerState={setViewerState}
        viewNote={viewNote}
         />
        
      </div>
    </>
  );
}

export default NoteContainer;
