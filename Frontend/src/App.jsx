import React from 'react'
import Navbar from './components/others/Navbar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
      </Routes>
    </>
  )
}

export default App
