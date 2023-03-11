import React from 'react'
import { BsXLg } from 'react-icons/bs'
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'
import '../stylesheets/modal.css'
import { emptyNote } from './Wall'
import { auth } from '../firebase/auth'

function Modal ({ content, isOpen, onClose, currentNote, setCurrentNote }) {
  const createOrEditNote = async () => {
    if (currentNote.id === '') {
      const date = new Date().toLocaleString()
      await addDoc(collection(db, `notesfrom${auth.currentUser.uid}`), {
        title: currentNote.title,
        description: currentNote.description,
        date
      })
      setCurrentNote(emptyNote)
    } else {
      const date = new Date().toLocaleString()
      console.log(auth.currentUser.uid)
      await updateDoc(doc(db, `notesfrom${auth.currentUser.uid}`, currentNote.id), {
        title: currentNote.title,
        description: currentNote.description,
        date
      })
      setCurrentNote(emptyNote)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCurrentNote((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <>
      {isOpen && (
        <section className='modal-overlay'>
          <section className='note-input'>
            <section className='close-icon'>
              <BsXLg
                onClick={() => {
                  onClose()
                }}
              />
            </section>
            <input
              className='note-input-title'
              type='text'
              placeholder='Title'
              name='title'
              value={currentNote.title}
              // onChange={(e) => setCurrentNote((prevState) => ({ id: prevState.id, description: prevState.description, title: e.target.value }))}
              // onChange={(e) => setCurrentNote((prevState) => ({ ...prevState, title: e.target.value }))}
              onChange={handleChange}
            />
            <textarea
              className='note-input-text'
              placeholder='Start typing'
              name='description'
              value={currentNote.description}
              // onChange={(e) => setCurrentNote((prevState) => ({ ...prevState, description: e.target.value }))}
              onChange={handleChange}
            />
            <button
              className='note-btn'
              onClick={() => {
                createOrEditNote()
                onClose()
              }}
            >
              {content}
            </button>
          </section>
        </section>
      )}
    </>
  )
}

export default Modal
