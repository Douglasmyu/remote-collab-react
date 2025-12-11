import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Nav from './components/nav'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <div class = "flex items-center space-x-8">
      <h1>Remote Collab</h1>
      <Login/>
      <Register/>
      <Dashboard/>
    </div>
  )
}

export default App
