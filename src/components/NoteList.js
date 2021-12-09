import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes}) {
  const renderNotes = notes.map(notes => <NoteItem key={notes.id} notes={notes} />)
  return (
    <ul>
      {renderNotes}
      <NoteItem notes={notes}/>
    </ul>
  );
}

export default NoteList;
