import React, { useState, useEffect } from 'react'
import { collection, doc, deleteDoc, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase/config'
import { BsPencilSquare, BsTrashFill } from 'react-icons/bs'
import '../stylesheets/notes.css'

function Notes () {
  const [notesList, setNotesList] = useState([])

  const getNotes = async () => {
    onSnapshot(query(collection(db, 'notes')), (querySnapshot) => {
      const notes = []
      querySnapshot.forEach((doc) => {
        notes.push({ ...doc.data(), id: doc.id })
      })
      setNotesList(notes)
    })
  }

  useEffect(() => {
    getNotes()
  }, [])

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, 'notes', id))
  }

  return (
    <div className='notes-container'>
      {notesList.map((note) => (
      <div className='note' key={note.id}>
        <h2>{note.title}</h2>
        <p>{note.description}</p>
        <div className='note-icons'>
          <BsPencilSquare
            className='edit-icon'
            on
          />
          <BsTrashFill
            className='delete-icon'
            onClick={() => deleteNote(note.id)}
          />
        </div>
      </div>
      ))}
    </div>
  )
}

export default Notes