import React, { useContext, useEffect, useState, useRef } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';


const Notes = (props) => {
    const context = useContext(NoteContext);
    const { notes, fetchNotes, editNote} = context;

    useEffect(() => {
        fetchNotes()
    }, [])

    const ref = useRef(null);
    const closeRef = useRef(null);

    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: "" })

    const updateNote = (currrentNote) => {
        ref.current.click();
        setNote({id: currrentNote._id,etitle: currrentNote.title,edescription: currrentNote.description, etag: currrentNote.tag})
    }

    const handleAddNote = (e) => {
        console.log("Updating Note...",note)
        editNote(note.id,note.etitle,note.edescription,note.etag)
        props.showAlert("Note Updated.","success")
        closeRef.current.click()
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3 ">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleAddNote} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 style={{ fontSize: "30px" }}>Your Notes</h1>
            <div className="row container">{
                
                notes.map((note) => {
                    return <NoteItem note={note} showAlert={props.showAlert} updateNote={updateNote} key={note.title} />
                })
            }
            </div>
        </>

    )
}

export default Notes