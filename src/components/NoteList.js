import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, setViewerState, setViewNote}) {
  const renderNotes = () => notes.map(note => <NoteItem 
    setViewerState={setViewerState} 
    key={note.id} 
    note={note}
    setViewNote={setViewNote}
    />)
  return (
    <ul>
      {renderNotes()}
    </ul>
  );
}

export default NoteList;
