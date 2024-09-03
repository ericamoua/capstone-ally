import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from "./pages/Home"
import Login from './components/Login'
import Register from './components/Register'
import Contact from './pages/Resource';
import FindHome  from './pages/HouseSearch';
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'


function App() {
  return (
    <Router>
  <div className='App'>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/resource" element={<Contact/>}/>
       <Route path="/search" element={<FindHome/>}/>
       <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />


    </Routes>
    <Footer/>
  </div>
</Router>
  )
}

export default App
