import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/login'
import About from './pages/About'
import Home from './pages/Home'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Nav from './components/nav'
import './App.css'
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'
function App() {

return (
  <div className="min-h-screen bg-green-500 text-white flex items-center justify-center">
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
    
  </div>
);
}

export default App
