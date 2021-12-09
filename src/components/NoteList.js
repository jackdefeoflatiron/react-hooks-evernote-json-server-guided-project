import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, NoteItem}) {
  const renderNotes = notes.map(notes => <NoteItem key={notes.id} notes={notes} />)
  return (
    <ul>
      {renderNotes}
      <NoteItem />
    </ul>
  );
}

export default NoteList;
