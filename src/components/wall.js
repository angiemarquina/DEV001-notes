import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../firebase/auth'

function Wall () {
  const navigate = useNavigate()
  function signOut () {
    logout()
      .then(() => {
        console.log('Sign-out successful')
        navigate('/')
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <div className='wall'>
      <button onClick={signOut}>Log out</button>
    </div>
  )
}

export default Wall
