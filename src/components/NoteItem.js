import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

const NoteItem = (props) => {
    const note = props.note
    const updateNote = props.updateNote
    const context = useContext(NoteContext);
    const {deleteNote} = context
    return (
        <div className="card col-md-3 my-3 mx-3" >
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <i className="fa-solid fa-trash mx-1" onClick={()=>{deleteNote(note._id); props.showAlert("Note Deleted.","success")}}></i>
                <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note);  }}></i>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}

export default NoteItem