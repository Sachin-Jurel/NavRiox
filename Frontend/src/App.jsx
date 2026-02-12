import React from 'react'
import Navbar from './components/others/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Support from './Pages/Support'
import Changelog from './Pages/Changelogs'
import Footer from './components/others/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/support" element={<Support />} />
        <Route path="/changelog" element={<Changelog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
