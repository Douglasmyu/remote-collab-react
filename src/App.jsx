import { useState } from 'react'

import Login from './pages/login'
import About from './pages/About'
import Home from './pages/Home'
import Register from './pages/register'
import Nav from './components/nav'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useLocation  } from 'react-router-dom'
function App() {

return (
  <div className="min-h-screen bg-green-500 text-white flex items-center justify-center">
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </div>
);
}

function AppContent(){
  const location = useLocation();
  const noRoute = ["/Login","/Register", "/About"];
  const shouldShowNav = !noRoute.includes(location.pathname);
  
  return(
    <>
    {shouldShowNav && <Nav />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App
