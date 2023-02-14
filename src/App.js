import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Register from './components/register'
import Login from './components/login'
import Wall from './components/wall'

function App () {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/wall' element={<Wall />} />
  </Routes>
  )
}

export default App
