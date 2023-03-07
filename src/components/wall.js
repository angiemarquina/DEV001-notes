import React, { useState, useEffect } from 'react'
import {
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore'
import { db } from '../firebase/config'
import {
  BsFillPlusCircleFill,
  BsPencilSquare,
  BsTrashFill
} from 'react-icons/bs'
import '../stylesheets/wall.css'
import Modal from './Modal'
export const emptyNote = {
  id: '',
  title: '',
  description: ''
}

function Wall () {
  const [createModal, setCreateModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [notesList, setNotesList] = useState([])
  const [currentNote, setCurrentNote] = useState(emptyNote)

  const getNotes = async () => {
    onSnapshot(
      query(collection(db, 'notes'), orderBy('date', 'desc')),
      (querySnapshot) => {
        const notes = []
        querySnapshot.forEach((doc) => {
          notes.push({ ...doc.data(), id: doc.id })
        })
        setNotesList(notes)
      }
    )
  }

  useEffect(() => {
    getNotes()
  }, [])

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, 'notes', id))
  }

  return (
    <>
      <nav className='sidebar-container'>
        <section className='sidebar'>
          <BsFillPlusCircleFill
            className='plus-icon'
            onClick={() => setCreateModal(true)}
          />
        </section>
      </nav>
      <Modal
        content='Submit'
        isOpen={createModal}
        onClose={() => setCreateModal(false)}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <Modal
        content='Update'
        isOpen={editModal}
        onClose={() => setEditModal(false)}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <div className='notes-container'>
        {notesList.map((note) => (
          <div className='note' key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <div className='date-and-icons'>
              <p className='note-date'>{note.date}</p>
              <div className='note-icons'>
                <BsPencilSquare
                  className='edit-icon'
                  onClick={() => {
                    setEditModal(true)
                    setCurrentNote(note)
                  }}
                />
                <BsTrashFill
                  className='delete-icon'
                  onClick={() => deleteNote(note.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Wall
