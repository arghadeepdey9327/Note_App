import React,{useState,useEffect} from "react"
import Note from "./components/Note"
export default function App({note}){
  const [notes,setNotes]=useState(note)
  const [showAll,setShowAll]=useState(true)
  const noteToShow=showAll?notes:notes.filter(a=>a.important===true)
  const addNote=e=>{
    e.preventDefault()
    setNotes([...notes,{id:notes.length+1,content:document.getElementById('input').value,date:new Date().toISOString(),important:Math.random()<0.5}])
   document.getElementById('input').value=''
  }
    return (
    <div>
      <h1>Notes</h1>
      <button onClick={()=>setShowAll(!showAll)}>show {showAll?'important':'all'}</button>
     <Note note={noteToShow}/>
     <form onSubmit={addNote}>
      <input id='input' required/>
      <button type="submit">save</button>
     </form>
    </div>
  )
}
