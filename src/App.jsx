import { useState } from 'react'
import { BrowserRouter,Route,Routes } from "react-router"

import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
