import React from 'react'
import { BsXLg } from 'react-icons/bs'
import Create from './create'
import '../stylesheets/modal.css'

// eslint-disable-next-line react/prop-types
const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null
  }

  return (
    <section className='modal-container'>
      <div className='show-modal-container'>
        <div className='close-icon'>
          <BsXLg className="close" onClick={onClose}/>
        </div>
        <Create/>
        {children}
      </div>
    </section>
  )
}

export default Modal
