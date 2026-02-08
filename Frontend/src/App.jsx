import React from 'react'
import Navbar from './components/others/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
