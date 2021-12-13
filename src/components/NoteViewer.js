import React from "react";

function NoteViewer({setViewerState, viewNote}) {
  return (
    <>
      <h2>{viewNote.title}</h2>
      <p>{viewNote.body}</p>
      <button onClick={()=>setViewerState('editor')}>Edit</button>
    </>
  );
}

export default NoteViewer;
