import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from './components/Card'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <div>
      <NavBar />
      <Card />
    </div>

  )
}

export default App
