import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import '../stylesheets/create.css'

function Create () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const createNote = async () => {
    await addDoc(collection(db, 'notes'), { title, description })
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
            onClick={ createNote }>Submit</button>
        </section>
    </section>
  )
}

export default Create
