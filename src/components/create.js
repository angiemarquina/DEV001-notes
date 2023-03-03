import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import '../stylesheets/create.css'

function Create () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const createNote = async () => {
    const date = new Date().toLocaleString()
    await addDoc(collection(db, 'notes'), { title, description, date })
  }

  return (
    <section className='create-container'>
        <section className='note-input'>
          <input
            className='note-input-title'
            type='text'
            placeholder='Title'
            name='inputTitle'
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className='note-input-text'
            placeholder='Start typing'
            name='inputText'
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className='note-btn'
            onClick={ createNote }
            onChange={(e) => setDate(e.target.value)}>Submit</button>
        </section>
    </section>
  )
}

export default Create
