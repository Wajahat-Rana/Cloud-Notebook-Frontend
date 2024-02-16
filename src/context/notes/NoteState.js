import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props)=>{
    const notesInitial = [{
        "title": "Note#1",
        "description": "Hey There how Are You?"
    },
    {
        "title": "Note#2",
        "description": "Hope You Are Doing Well."
    },{
        "title": "Note#1",
        "description": "Hey There how Are You?"
    },
    {
        "title": "Note#2",
        "description": "Hope You Are Doing Well."
    },{
        "title": "Note#1",
        "description": "Hey There how Are You?"
    },
    {
        "title": "Note#2",
        "description": "Hope You Are Doing Well."
    }]
    const [notes,setNotes] = useState(notesInitial);
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;