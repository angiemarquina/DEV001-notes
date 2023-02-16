import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loginWithGoogle } from '../firebase/auth'
import '../stylesheets/home.css'

function Home () {
  const navigate = useNavigate()
  function signInWithGoogle () {
    loginWithGoogle()
      .then((credentials) => {
        console.log(credentials.user)
        navigate('/wall')
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <div className='home'>
      <img src={require('../img/logo.png')} />
      <h1 className='home-title'>Welcome to <br /> Mirai </h1>
      <p className='home-description'>Look to the <span className='home-highlight'>future</span> by <br /> prescribing in the <span className='home-highlight'>present</span></p>
      <button onClick={signInWithGoogle} className='btn-google'>Log in with Google</button>
    </div>
  )
}

export default Home
