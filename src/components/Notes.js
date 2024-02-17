import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';


const Notes = () => {
    const context = useContext(NoteContext);
    const { notes } = context;
    return (
        <>
        <AddNote />
        <h1 style={{ fontSize: "30px" }}>Your Notes</h1>
        <div className="row container">{
            notes.map((note) => {
                return <NoteItem note={note} key={note.title} />
            })
        }
        </div>
        </>

    )
}

export default Notes