import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial =[]
  const [notes, setNotes] = useState(notesInitial)

  //Get All Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkNzY3MDZlOTVmYzJkN2U0NjE5MDg5In0sImlhdCI6MTcwODY2NTM0OX0.TQwH19c1xkZdUy7A4xgiVkA5dYi7w_KKFLkcne7w-3Q"
      }
    });
    const json = await response.json();
    console.log(json)
    setNotes(json)

  }

  //Add a Note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkNzY3MDZlOTVmYzJkN2U0NjE5MDg5In0sImlhdCI6MTcwODY2NTM0OX0.TQwH19c1xkZdUy7A4xgiVkA5dYi7w_KKFLkcne7w-3Q"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json)
    
    console.log("Adding a new note")
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
  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkNzY3MDZlOTVmYzJkN2U0NjE5MDg5In0sImlhdCI6MTcwODY2NTM0OX0.TQwH19c1xkZdUy7A4xgiVkA5dYi7w_KKFLkcne7w-3Q"
      }
    });
    const json = response.json();
    console.log(json)

    console.log("Deleting the note with id" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkNzY3MDZlOTVmYzJkN2U0NjE5MDg5In0sImlhdCI6MTcwODY2NTM0OX0.TQwH19c1xkZdUy7A4xgiVkA5dYi7w_KKFLkcne7w-3Q"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to Edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;