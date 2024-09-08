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
import GoogleSignIn from './components/GoogleSignIn';
import GoogleCallback from './components/GoogleCallback';
import ListingDetails from "./components/ListingDetails"
import Admin from './components/Admin'
import Error from './pages/Error'
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
      <Route path="/listing/:id" element={<ListingDetails />} />
       <Route path="/google" element={<GoogleCallback/>} />
       <Route path="/auth/google/callback" element={<GoogleCallback/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<Error />} />
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
