import React, { useState, useEffect } from 'react'
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { BsPencilSquare, BsTrashFill } from 'react-icons/bs'
import '../stylesheets/notes.css'

function Notes () {
  const [notesList, setNotesList] = useState([])

  const getNotes = async () => {
    const data = await getDocs(collection(db, 'notes'))
    setNotesList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    getNotes()
    console.log('mira mi nota')
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
        <BsPencilSquare className='edit-icon' onClick={() => console.log(note.id)}/>
        <BsTrashFill className='delete-icon' onClick={() => deleteNote(note.id)}/>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Notes
