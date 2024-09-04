import React, { useState } from 'react';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import styles from "/src/styles/Resource.module.css"; // Using CSS module

const Resource = () => {
  // State management for form inputs and errors
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const [capychaIsDone, setCapychaIsDone] = useState(false);
  const Google_Recaptcha_API_KEY ='6LdOkjYqAAAAAL3WyeLXRWyMEgAnfPhiJGjlabiU';

  // Recaptcha change handler
  function onChange() {
    console.log('Recaptcha changed');
    setCapychaIsDone(!capychaIsDone);
  }

  // Form validation logic
  const validateForm = (e) => {
    e.preventDefault();
    let valid = true;

    if (firstName.length < 1 || firstName.length >= 20) {
      setErrors(prev => ({ ...prev, firstName: firstName.length < 1 ? "First name is required" : "First name too long" }));
      valid = false;
    } else {
      setErrors(prev => { const { firstName, ...rest } = prev; return rest; });
    }

    if (lastName.length < 1 || lastName.length >= 20) {
      setErrors(prev => ({ ...prev, lastName: lastName.length < 1 ? "Last name is required" : "Last name too long" }));
      valid = false;
    } else {
      setErrors(prev => { const { lastName, ...rest } = prev; return rest; });
    }

    if (email === "" || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors(prev => ({ ...prev, email: "Invalid email address" }));
      valid = false;
    } else {
      setErrors(prev => { const { email, ...rest } = prev; return rest; });
    }

    if (subject === "" || subject.length >= 50) {
      setErrors(prev => ({ ...prev, subject: "Subject is required" }));
      valid = false;
    } else {
      setErrors(prev => { const { subject, ...rest } = prev; return rest; });
    }

    if (comment === "" || comment.length >= 500) {
      setErrors(prev => ({ ...prev, comment: "Message is required" }));
      valid = false;
    } else {
      setErrors(prev => { const { comment, ...rest } = prev; return rest; });
    }

    if (valid && capychaIsDone) {
      console.log("Form submitted");
      // Handle form submission
    }
  };

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.contactImage}>
          <h1 className={styles.contactText}>Contact Us Today!</h1>
        </div>
        <div className={styles.container}>
          <h2 className={styles.contactTextLarge}>We would love to hear from you!</h2>
          <p className={styles.contactTextSmall}>We value your feedback!</p>
          <form className={styles.contactForm} onSubmit={validateForm}>
            <div className={`${styles.formc} ${errors.firstName ? styles.error : ''}`}>
              <label>First Name:</label>
              <input
                className={styles.userInput}
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div className={`${styles.formc} ${errors.lastName ? styles.error : ''}`}>
              <label>Last Name:</label>
              <input
                className={styles.userInput}
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div className={`${styles.formc} ${errors.email ? styles.error : ''}`}>
              <label>Email:</label>
              <input
                className={styles.userInput}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className={`${styles.formc} ${errors.subject ? styles.error : ''}`}>
              <label>Subject:</label>
              <input
                className={styles.userInput}
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {errors.subject && <p>{errors.subject}</p>}
            </div>
            <div className={`${styles.formc} ${errors.comment ? styles.error : ''}`}>
              <label>Comments / Questions:</label>
              <textarea
                className={styles.textArea}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              {errors.comment && <p>{errors.comment}</p>}
            </div>

            <GoogleReCaptchaProvider reCaptchaKey={Google_Recaptcha_API_KEY}>
  <GoogleReCaptcha
    sitekey={Google_Recaptcha_API_KEY}
    onVerify={token => setCapychaIsDone(!!token)}
  />
</GoogleReCaptchaProvider>
            {capychaIsDone ? (
              <button className={styles.submitButton}>
                <span className={styles.circle1}></span>
                <span className={styles.circle2}></span>
                <span className={styles.circle3}></span>
                <span className={styles.circle4}></span>
                <span className={styles.circle5}></span>
                <span className={styles.text}>Submit</span>
              </button>
            ) : null}
          </form>
        </div>
      </div>
  

      <main>
        <section className={styles.hero}>
          <h1>Your Complete Guide To Affordable Home Buying.</h1>
          <p>Buying a home that fits your budget can be stressful, but we're here to help. Learn how to buy a home with articles and tips from our experts.</p>
        </section>

        <section className={styles.cardSection}>
          <div className={styles.card}>
            <a href="/page1">
              <h2> Definition of Under Contract </h2>
              <p>Understanding the concept of home being labled as "active under contract."</p>
            </a>
          </div>
          <div className={styles.card}>
            <a href="/page2">
              <h2>Buying a Home as a Non-U.S. Citizen</h2>
              <p>Learn about mortgage options and find the best rates.</p>
            </a>
          </div>
          <div className={styles.card}>
            <a href="/page3">
              <h2>How to Choose a Real Estate Agent</h2>
              <p>Find a trusted real estate agent in your area.</p>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};


export default Resource;
