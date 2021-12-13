import React from "react";
import NoteList from "./NoteList";

function NoteItem({note, setViewerState, setViewNote}) {
  const truncate = (str) => str.length > 15 ? str.substring(0,15) + "..." :str;
  const handleClick =(note) => {
      setViewerState('viewer') 
      setViewNote(note)
  }
  
  return (
    <li onClick={()=> handleClick(note)}>
      <h2> {note.title} </h2>
      <p style = {{overflow: 'hidden',
    textOverflow: 'ellipsis'}}> {truncate(note.body)} </p>
    </li>
  );
}

export default NoteItem;
