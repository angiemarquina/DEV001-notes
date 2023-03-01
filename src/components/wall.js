import React, { useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import Modal from './modal'
import Notes from './notes'
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
        <BsFillPlusCircleFill className='plus-icon' onClick={handleShowModal}/>
      </section>
    </nav>
    <Modal show={showModal} onClose={handleCloseModal} />
    <Notes></Notes>
  </section>
  )
}

export default Wall
