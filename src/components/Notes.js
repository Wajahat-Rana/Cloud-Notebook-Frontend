import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';


const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <div className="row container">{
            notes.map((note) => {
                return <NoteItem note={note} key={note.title} />
            })
        }
        </div>

    )
}

export default Notes