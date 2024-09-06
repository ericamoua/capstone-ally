// change the navbar to have the social icons in it, and remove the icons from the footer
import React from 'react';
import {Link} from 'react-router-dom'
import footerCSS from '../styles/Footer.module.css'
import { SocialIcon } from 'react-social-icons'
import Logo from '../assets/logo-2.png'

function Footer() {
  return (
    <footer>
      <div className={footerCSS.footerContent}>
        <div className={footerCSS.newsletterContainer}>
          <h2>Newsletter</h2>
          <p className={footerCSS.links}>Keep up with the housing market!</p>
          <form>
            <input type="email" name="email" placeholder="Your email address" className={footerCSS.input} />
            <button type="submit" className={footerCSS.subBtn}>Subscribe</button>
          </form>
        </div>

        <div className={footerCSS.footerLinks}>
          <div className={footerCSS.footerContainer}>
         <h3>Policies</h3>
          <Link  className={footerCSS.links} to='/'>Privacy Policy</Link>
          <Link  className={footerCSS.links} to='/'>Terms and Conditions</Link>
          </div>

          <div className={footerCSS.footerContainer}>
            <h3>Site Links</h3>
            <Link className={footerCSS.links} to='/'>Home</Link>
            <Link  className={footerCSS.links} to="/search">Find Your Home </Link>
            <Link className={footerCSS.links} to='/resource'>Contact And Resources</Link>
          </div>

          <div className={footerCSS.footerContainer}>
            <h3>First time home buyers</h3>
            <Link  className={footerCSS.links} to='/'>Brokers</Link>
            <Link className={footerCSS.links} to='/'>Lenders</Link>
            <Link  className={footerCSS.links} to='/'>Lease to buy</Link>
          </div>
        </div>
      </div>
      <div className={footerCSS.socialHeading}>
     <h3>Follow us on social media!</h3>
 
     </div>
      <div className={footerCSS.socialIconsContainer}>

      <SocialIcon url="https://twitter.com" style={{ margin: ".5rem" }} target="_blank" rel="noreferrer" />
              <SocialIcon url="https://www.facebook.com/" style={{ margin: ".5rem" }} target="_blank" rel="noreferrer" />
              <SocialIcon url="https://www.tiktok.com/en/" style={{ margin: ".5rem" }} target="_blank" rel="noreferrer" />
      </div>
    </footer>
  );
}

export default Footer;
