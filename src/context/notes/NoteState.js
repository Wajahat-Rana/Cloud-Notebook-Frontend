import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const host = "http://localhost:3000"
    const notesInitial = [{
        "title": "Note#1",
        "description": "Hey There how Are You?",
        "_id": "1"
    },
    {
        "title": "Note#2",
        "description": "Hope You Are Doing Well.",
        "_id": "2"
    }, {
        "title": "Note#3",
        "description": "Hey There how Are You?",
        "_id": "3"
    },
    {
        "title": "Note#4",
        "description": "Hope You Are Doing Well.",
        "_id": "4"
    }, {
        "title": "Note#5",
        "description": "Hey There how Are You?",
        "_id": "5"
    },
    {
        "title": "Note#6",
        "description": "Hope You Are Doing Well.",
        "_id": "6"
    }]
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

    const updateNote = async (id, title, description, tag) => {

        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViMjI1Njc4NzI5YmIxNGM2OTE3ZjE5In0sImlhdCI6MTcwNjQyOTc4Nn0.b2i8UQTuq-MMVzZO4cWf1DzKq-oEKQ9TLvshmDOjmKk"
            }
        });


        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }

    }
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
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;