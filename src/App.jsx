import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from "./pages/Home"
// import Login from './Components/Login'
// import Register from './Components/Register'
function App() {


  return (
    <Router>
  <div className='App'>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* // <Route path="/login" element={<Login/>}/>
      // <Route path="/register" element={<Register/>}/> */}
    </Routes>
    {/* <Footer/> */}
  </div>
</Router>
  )
}

export default App
