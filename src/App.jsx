<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Morgage from '../src/components/Morgage.jsx';
import './styles/morgage.module.css';


=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import Footer from './components/Footer'
// import Home from "./Components/Home"
// import Login from './Components/Login'
// import Register from './Components/Register'
>>>>>>> f3d3f795f81e4e82a0930a6d4a626527c90c40cd
function App() {


  return (
<<<<<<< HEAD
    <>
      <Morgage />
    </>
=======
    <Router>
  <div className='App'>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Footer/>
  </div>
</Router>
>>>>>>> f3d3f795f81e4e82a0930a6d4a626527c90c40cd
  )
}

export default App
