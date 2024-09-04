import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import navCSS from '../styles/nav.module.css';
import Logo from '../assets/logo-2.png';
function BootNavbar() {
  return (
    <header>
      <Navbar expand="lg" className={navCSS.bootNav}>
        <Container fluid>
          <Navbar.Brand >
          <Link to="/">
              <img
                src={Logo}
                style={{
                  display: 'inline-block',
                  width: '60%',
                  height: '30%',
                }}
                alt="Logo"
              />
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" style={{ color: 'white' }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/search" style={{ color: 'white' }}>
                Find Your Home
              </Nav.Link>
              <Nav.Link as={Link} to="/resource" style={{ color: 'white' }}>
                Contact Us
              </Nav.Link>
              {/* <Form className="d-flex" style={{ margin: ".5rem" }}>
                <Link to="/login">
                  <Button variant="primary" size="sm">
                    Login
                  </Button>
                </Link>
              </Form> */}
            </Nav>
            <div className="d-flex align-items-center">
              <Form className="d-flex" style={{ marginRight: '1rem' }}>
                <Link to="/login">
                  <Button variant="primary" size="sm">
                    Login
                  </Button>
                </Link>
              </Form>
              <div className={navCSS.SocialIcons}>
                <SocialIcon
                  url="https://twitter.com"
                  style={{ margin: '.5rem' }}
                  target="_blank"
                  rel="noreferrer"
                />
                <SocialIcon
                  url="https://www.facebook.com/"
                  style={{ margin: '.5rem' }}
                  target="_blank"
                  rel="noreferrer"
                />
                <SocialIcon
                  url="https://www.tiktok.com/en/"
                  style={{ margin: '.5rem' }}
                  target="_blank"
                  rel="noreferrer"
                />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default BootNavbar;