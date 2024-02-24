import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = 
    [
        {
          "_id": "65d87c84c5d4c43bdc53c0c0",
          "user": "65d76706e95fc2d7e4619089",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-02-23T11:07:48.694Z",
          "__v": 0
        },
        {
          "_id": "65d87c88c5d4c43bdc53c0c2",
          "user": "65d76706e95fc2d7e4619089",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-02-23T11:07:52.417Z",
          "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;