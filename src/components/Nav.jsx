import { useState } from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/logo-2.png'


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuToggle = () => {
    console.log(menuToggle);
    setMenuToggle(!menuToggle);
  }

  return (
    <header>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="/"> <img src={Logo} className="logoImg"/> </a>
          </div>
          <ul id="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/search">Find Your Home</a></li>
            <li><a href="/resource">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </nav>
<<<<<<< HEAD
      <div className="menuIcon" onClick={handleMenuClick}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>
      {isMenuOpen && (
        <div className="overlay-menu">
          <ul id="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
=======
      <div className="menuIcon" onClick={handleMenuToggle}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      {menuToggle && (
        <div className="overlay-menu">
          <ul id="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/search">Find Your Home</a></li>
            <li><a href="/resource">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      )}
    </>
>>>>>>> 21d6498cf8eed03729a7b70f8b46631bcb384841
  );
}

export default Navbar; 