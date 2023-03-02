import React, { useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import Modal from './Modal'
import Notes from './Notes'
import '../stylesheets/wall.css'

function Wall () {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
  <section className="wall-container">
    <nav className='sidebar-container'>
      <section className='sidebar'>
        <BsFillPlusCircleFill
          className='plus-icon'
          onClick={handleShowModal}
        />
      </section>
    </nav>
    <Modal
      show={showModal}
      onClose={handleCloseModal}
    />
    <Notes/>
  </section>
  )
}

export default Wall
