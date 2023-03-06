import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import '../stylesheets/modal.css'

function Modal ({ content, isOpen, onClose, moveData }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const createNote = async () => {
    const date = new Date().toLocaleString()
    await addDoc(collection(db, 'notes'), { title, description, date })
  }

  return (
    <>
      {isOpen && (
        <section className='modal-overlay'>
          <section className='note-input'>
            <input
              className='note-input-title'
              type='text'
              placeholder='Title'
              name='inputTitle'
              value={moveData ? moveData.title : ''}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className='note-input-text'
              placeholder='Start typing'
              name='inputText'
              value={moveData ? moveData.description : ''}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              className='note-btn'
              onClick={ () => {
                // colocar un ternario para crear y editar
                createNote()
                onClose()
              }}
              onChange={(e) => setDate(e.target.value)}
            >{content}</button>
          </section>
        </section>
      )}
    </>
  )
}

export default Modal
