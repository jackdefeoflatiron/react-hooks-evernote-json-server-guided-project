import React from "react";
import NoteList from "./NoteList";

function NoteItem({notes}) {
  return (
    <li>
      <h2>Title {notes.title} </h2>
      <p>Caption...{notes.body} </p>
    </li>
  );
}

export default NoteItem;
