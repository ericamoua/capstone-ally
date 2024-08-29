import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { SocialIcon } from 'react-social-icons'
import { Link, useNavigate } from 'react-router-dom';
import navCSS from '../CSS/Nav.module.css'

function BootNavbar(){
    return(
<header>
  <Navbar expand="lg" className={navCSS.bootNav}>
      <Container fluid>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
     
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link href="#Find Homes"  style={{ color: 'white' }}>Find your home</Nav.Link>
            <Nav.Link href="#About us"  style={{ color: 'white' }}>About us</Nav.Link>
           
            <NavDropdown  style={{ color: 'white' }} title="Why company name"  id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Lower interest rate</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Upgrades included
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Ameneties">
               Move in ready
              </NavDropdown.Item>
              
            </NavDropdown>
   <div className={navCSS.SocialIcons}>
   <SocialIcon url="https://twitter.com" />
   <SocialIcon url="https://www.facebook.com/" />
   <SocialIcon url=" https://www.tiktok.com/en/" />
   </div>
          </Nav>
          <Form className="d-flex">
        <Link to="/login"><button type="button"  class="btn btn-primary btn-sm">Login</button></Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</header>
    )
}



export default BootNavbar;