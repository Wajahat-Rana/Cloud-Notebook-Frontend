import React,{ useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props)=>{
    const notesInitial = [{
        "title": "Note#1",
        "description": "Hey There how Are You?",
        "_id": "1"
    },
    {
        "title": "Note#2",
        "description": "Hope You Are Doing Well.",
        "_id": "2"
    },{
        "title": "Note#3",
        "description": "Hey There how Are You?",
        "_id": "3"
    },
    {
        "title": "Note#4",
        "description": "Hope You Are Doing Well.",
        "_id": "4"
    },{
        "title": "Note#5",
        "description": "Hey There how Are You?",
        "_id": "5"
    },
    {
        "title": "Note#6",
        "description": "Hope You Are Doing Well.",
        "_id": "6"
    }]
    const deleteNote = (id)=>{
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);
    }
    const updateNote = ()=>{
        
    }
    const addNote = (title,description,tag)=>{
        //API Call To Backend
        const note2 = {
            "title": title,
        "description": description,
        "tag": tag,
        "_id":"7"
        }
        setNotes(notes.concat(note2))
    }
    const [notes,setNotes] = useState(notesInitial);
    return(
        <NoteContext.Provider value={{notes,setNotes, addNote, deleteNote, updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;