import React from 'react';
import errorCSS from '../styles/pagenotfound.module.css';

const PageNotFound = () => {
  return (
    <div>
      <img className={errorCSS['not-found-img']} src="../assets/houseerror.png" alt="404"/>
      <h1 className={errorCSS['not-found-title']}>404</h1>
      <h2 className={errorCSS['not-found-title']}>Page Not Found</h2>

      <h4 className={errorCSS['not-found-text']}>The page you are looking for could not be found.</h4>
      <p className={errorCSS['not-found-text']}>You may have mistyped the address or the page may have been moved.</p>
      <button className={errorCSS['not-found-button']}>Back to Home</button>
    </div>
  )
}

export default PageNotFound
