import react from 'react'
import NoteContext from './NoteContext'

const NoteState = (props)=>{
    const state = {
        "name": "Wajahat",
        "gender": "Male"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;