import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const host = "http://localhost:3000"
    const notesInitial = []
    const deleteNote = async (id) => {
        try {
            // Send DELETE request to backend API
            const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViMjI1Njc4NzI5YmIxNGM2OTE3ZjE5In0sImlhdCI6MTcwNjQyOTc4Nn0.b2i8UQTuq-MMVzZO4cWf1DzKq-oEKQ9TLvshmDOjmKk"
                }
            });

            if (response.ok) {
                const newNotes = notes.filter((note) => note._id !== id);
                setNotes(newNotes);
            } else {
                console.error("Failed to delete note from backend");
            }
        } catch (error) {
            console.error("An error occurred while deleting note:", error);
        }
    }

    // const editNote = async (id, title, description, tag) => {

    //     //API Call
    //     const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViMjI1Njc4NzI5YmIxNGM2OTE3ZjE5In0sImlhdCI6MTcwNjQyOTc4Nn0.b2i8UQTuq-MMVzZO4cWf1DzKq-oEKQ9TLvshmDOjmKk"
    //         }
    //     });

    //     let newNotes = JSON.parse(JSON.stringify(notes))
    //     for (let index = 0; index < newNotes.length; index++) {
    //         const element = newNotes[index];
    //         if (element._id === id) {
    //             newNotes[index].title = title;
    //             newNotes[index].description = description;
    //             newNotes[index].tag = tag;
    //         }
    //         break;

    //     }
    //     setNotes(newNotes)

    // }




    const editNote = async (id, title, description, tag) => {
        // Prepare the updated note object
        const updatedNote = {
            title: title,
            description: description,
            tag: tag
        };
    
        try {
            // Make the API call to update the note
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViMjI1Njc4NzI5YmIxNGM2OTE3ZjE5In0sImlhdCI6MTcwNjQyOTc4Nn0.b2i8UQTuq-MMVzZO4cWf1DzKq-oEKQ9TLvshmDOjmKk" // Update with your actual auth token
                },
                body: JSON.stringify(updatedNote) // Include the updated note data in the request body
            });
    
            // Check if the request was successful
            if (response.ok) {
                // If successful, update the notes in the state
                const updatedNotes = notes.map(note => {
                    if (note._id === id) {
                        return { ...note, ...updatedNote };
                    }
                    return note;
                });
    
                setNotes(updatedNotes);
            } else {
                // Handle the case when the request fails
                console.error("Failed to update note");
            }
        } catch (error) {
            console.error("Error updating note:", error);
        }
    };

    


    const fetchNotes = async () => {
        const response = await fetch(`${host}/api/notes/getnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViMjI1Njc4NzI5YmIxNGM2OTE3ZjE5In0sImlhdCI6MTcwNjQyOTc4Nn0.b2i8UQTuq-MMVzZO4cWf1DzKq-oEKQ9TLvshmDOjmKk"
            }
        });
        const json = await response.json();
        setNotes(json)
    }
    const addNote = async (title, description, tag) => {
        //API Call To Backend
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViMjI1Njc4NzI5YmIxNGM2OTE3ZjE5In0sImlhdCI6MTcwNjQyOTc4Nn0.b2i8UQTuq-MMVzZO4cWf1DzKq-oEKQ9TLvshmDOjmKk"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json)
        if(response.ok){
        setNotes([...notes, json]);
        }
    }
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;