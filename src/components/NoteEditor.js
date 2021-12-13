import React, {useEffect,useState} from "react";

function NoteEditor({setViewerState, viewNote, note, setViewNote}) {
  const [newTitle, setNewTitle] = useState(`${viewNote.title}`)
  const [newBody, setNewBody] = useState(`${viewNote.body}`)
  const handleSave = (viewNote, e) => {
    e.preventDefault()
   
      
      
      fetch(`http://localhost:3000/notes/${viewNote.id}`, 
      {method : "PATCH",
        headers : {"Content-Type": "application/json"},
        body: JSON.stringify({
          title: `${newTitle}`,
          body: `${newBody}`
        })
      })

      .then(res =>res.json())
      .then(data => setViewNote(data))

    }

  return (
    <form className="note-editor">
      <input 
      type="text" 
      defaultValue={viewNote.title} 
      name="title" 
      onChange={(e)=> setNewTitle(e.target.value)}
      />
      <textarea 
      name="body" 
      defaultValue={viewNote.body} 
      onChange={(e)=> setNewBody(e.target.value)} 
      />
      <div className="button-row">
        <input 
        className="button" 
        type="submit" 
        value="Save"
        onClick={(e)=>handleSave(viewNote,e)} />
        <button onClick={()=>setViewerState('viewer')} type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
