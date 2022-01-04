import React, { useState,useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setAllNotes] = useState([])
  const [selectedNotes, setSelectedNotes] = useState("")
  const [searchNotes, setSearchNotes] = useState("")
  const [isEdit, toggleIsEdit] = useState(false)
  const [isSelected, setIsSelected] = useState(false)


  const displayNote = notes.filter((note) => {
    if (searchNotes === "") return true;
    return note.title.toUpperCase().includes(searchNotes.toUpperCase()) 
  })


  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => setAllNotes(data))
  },[])

  const onClickSideBar = (note) => {
    setSelectedNotes(note)
    setIsSelected(true)
    toggleIsEdit(false)
  }

  return (
    <>
      <Search onchangeSearch={setSearchNotes} searchNotes={searchNotes} />
      <div className="container">
        <Sidebar 
        onClickSideBar = {onClickSideBar}
        
        setAllNotes={setAllNotes}
        notes={displayNote} />
        <Content 
        selectedNotes={selectedNotes} 
        isEdit={isEdit}
        isSelected={isSelected}
        
        toggleIsEdit={toggleIsEdit}
        />
      </div>
    </>
  );
}

export default NoteContainer;