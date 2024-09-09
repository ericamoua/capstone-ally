import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/logo-2.png';
import { handleLogout } from './Logout';

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('https://ecommercev2-ytjg.onrender.com/auth/check-auth', {
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();
        setIsLoggedIn(data.loggedIn); 
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
    };
    

    checkAuth();
  }, []);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  }

  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="/"> <img src={Logo} className="logoImg"/> </a>
          </div>
          <ul id="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/search">Find Your Home</a></li>
            <li><a href="/resource">Contact</a></li>
            {isLoggedIn ? (
              <li><a href="#" onClick={handleLogout}>Log out</a></li>
            ) : (
              <li><a href="/login">Login</a></li>
            )}
          </ul>
        </div>
      </nav>
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
            {isLoggedIn ? (
              <li><a href="#" onClick={handleLogout}>Log out</a></li>
            ) : (
              <li><a href="/login">Login</a></li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
