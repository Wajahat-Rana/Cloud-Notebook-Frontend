import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

const AddNote = () => {
    const context = useContext(NoteContext)
    const {addNote} = context;
    const [note, setNote] = useState({title:"",description:"",tag:""})
    const handleAddNote = (e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
    }
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div><h1 style={{ fontSize: "30px" }}>Add A Note</h1>
    <form className='my-3'>
        <div className="mb-3 col-md-8">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}/>
        </div>
        <div className="mb-3 col-md-8">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your notes with anyone else.</div>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
    </form></div>
  )
}

export default AddNote