import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import navCSS from '../CSS/Nav.module.css';

function BootNavbar() {
  return (
    <header>
      <Navbar expand="lg" className={navCSS.bootNav}>
        <Container fluid>
          <Navbar.Brand >LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/search" style={{ color: 'black' }}>
                Find your home
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: 'black' }}>
                Contact us
              </Nav.Link>
              <NavDropdown title="Why Budget Nest" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Lower interest rate
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Upgrades included
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Ameneties">
                  Move in ready
                </NavDropdown.Item>
              </NavDropdown>
              <Form className="d-flex" style={{ margin: ".5rem" }}>
                <Link to="/login">
                  <Button variant="primary" size="sm">
                    Login
                  </Button>
                </Link>
              </Form>
            </Nav>
            <div className={navCSS.SocialIcons}>
              <SocialIcon url="https://twitter.com" style={{ margin: ".5rem" }} target="_blank" rel="noreferrer" />
              <SocialIcon url="https://www.facebook.com/" style={{ margin: ".5rem" }} target="_blank" rel="noreferrer" />
              <SocialIcon url="https://www.tiktok.com/en/" style={{ margin: ".5rem" }} target="_blank" rel="noreferrer" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default BootNavbar;
