import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, setViewerState, setViewNote, createNewNote }) {
  
 

  return (
    <div className="master-detail-element sidebar">
      <NoteList  
      notes={notes} 
      setViewerState={setViewerState}
      setViewNote={setViewNote}
      />
      <button onClick={()=> createNewNote()}>New</button>
    </div>
  );
}

export default Sidebar;
