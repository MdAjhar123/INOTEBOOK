import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = 
    [
        {
          "_id": "65d87c84c7d4c43bdc53c0c0",
          "user": "65d76706e95fc2d7e4619089",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-02-23T11:07:48.694Z",
          "__v": 0
        },
        {
          "_id": "65d87c86c5d4c43bdc53c0c2",
          "user": "65d76706e95fc2d7e4619089",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-02-23T11:07:52.417Z",
          "__v": 0
        },
        {
          "_id": "65d87c84c5d4c43bdc53c0c5",
          "user": "65d76706e95fc2d7e4619089",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-02-23T11:07:48.694Z",
          "__v": 0
        },
        {
          "_id": "65d87c88c5d4c23bdc53c0c2",
          "user": "65d76706e95fc2d7e4619089",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-02-23T11:07:52.417Z",
          "__v": 0
        },
        {
          "_id": "65d87c84c5d2c43bdc53c0c0",
          "user": "65d76706e95fc2d7e4619089",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-02-23T11:07:48.694Z",
          "__v": 0
        },
        {
          "_id": "65d87c88c5d4c42bdc53c0c2",
          "user": "65d76706e95fc2d7e4619089",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-02-23T11:07:52.417Z",
          "__v": 0
        },
        {
          "_id": "65d87c84c5d5c43bdc53c0c0",
          "user": "65d76706e95fc2d7e4619089",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-02-23T11:07:48.694Z",
          "__v": 0
        },
        {
          "_id": "65d87c88c5d4c43bdc53c0c3",
          "user": "65d76706e95fc2d7e4619089",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-02-23T11:07:52.417Z",
          "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitial)

    //Add a Note
    const addNote = (title, description, tag)=>{
        const note = {
            "_id": "65d87c88c5d4c43bdc53c0c3",
            "user": "65d76706e95fc2d7e4619089",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-02-23T11:07:52.417Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = (id)=>{
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }

    //Edit a Note
    const editNote = ()=>{
        
    }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote }}>
        {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;