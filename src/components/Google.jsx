import React from 'react';
import styles from '../styles/GoogleSignIn.module.css'; // Import your CSS module

const GoogleSignIn = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign In with Google</h1>
      <button className={styles.googleButton}>
        <img
          src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
          alt="Sign in with Google"
          className={styles.buttonImage}
        />
      </button>
    </div>
  );
};

export default GoogleSignIn;
