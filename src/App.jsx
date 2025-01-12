import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import Vedios from './pages/Vedios'
import { Route, Router, Routes } from 'react-router-dom';

function App() {


  const [sidebar,setSidebar]=useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Vedios/>}/>
      </Routes>
    </div>
  )
}

export default App