import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/logo-2.png';
import { handleLogout } from './Logout'; 

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('https://ecommercev2-ytjg.onrender.com/auth/check-auth', {
          method: 'GET',
          credentials: 'include'
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Auth Check Response:', data); g
          setIsLoggedIn(data.loggedIn); 
        } else {
          console.error('Failed to check authentication status.');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
    };

    checkAuth();
  }, []);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  }

  const handleLogoutClick = async (e) => {
    e.preventDefault(); 
    console.log('Handling logout...');

    try {
      await handleLogout(navigate, setIsLoggedIn);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="/"> <img src={Logo} className="logoImg" alt="Logo"/> </a>
          </div>
          <ul id="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/search">Find Your Home</a></li>
            <li><a href="/resource">Contact And Resources</a></li>
            <li><a href="/login">Login</a></li>
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
              <li><a href="#" onClick={handleLogoutClick}>Log out</a></li>
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
