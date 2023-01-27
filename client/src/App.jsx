import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Csv from './Csv';
import Single from './Single';
function App() {
  return (
  <main>
    <header>
      <nav className='navbar'>
        <Link to='/' className='button-3'>Single Email Checker</Link> 
        <Link to='/csv' className='button-3'>CSV Email Checker</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Single/>} />
      <Route path="/csv" element={<Csv/>} />
    </Routes>
  </main>
  )
}

export default App
