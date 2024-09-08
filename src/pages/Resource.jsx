import React, { useState } from 'react';
import  GoogleReCaptcha  from 'react-google-recaptcha';
import styles from "/src/styles/Resource.module.css"; // Using CSS module

const Resource = () => {
  // State management for form inputs and errors
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});
  const [captchaIsDone, setCaptchaIsDone] = useState(false); 

  const Google_Recaptcha_API_KEY ='6LeYBRcqAAAAAICErRmaGeu6gKKyqIVZNgK3evcw';

  // Recaptcha change handler
  function onChange() {
    console.log('Recaptcha completed');
    setCaptchaIsDone(true); 
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

    // Submit form only if valid and captcha is done
    if (valid && captchaIsDone) {
      handleSubmit();
    } else if (!captchaIsDone) {
      console.log("Captcha not completed");
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    const formData = {
      firstName,
      lastName,
      email,
      subject,
      comment
    };

    const response = await fetch('https://ecommercev2-ytjg.onrender.com/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log('Form data submitted successfully');
    } else {
      console.error('Error submitting form data');
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
              {errors.firstName && <div className={styles.errorMessage}>{errors.firstName}</div>}
            </div>
            <div className={`${styles.formc} ${errors.lastName ? styles.error : ''}`}>
              <label>Last Name:</label>
              <input
                className={styles.userInput}
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <div className={styles.errorMessage}>{errors.lastName}</div>}
            </div>
            <div className={`${styles.formc} ${errors.email ? styles.error : ''}`}>
              <label>Email:</label>
              <input
                className={styles.userInput}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
            </div>
            <div className={`${styles.formc} ${errors.subject ? styles.error : ''}`}>
              <label>Subject:</label>
              <input
                className={styles.userInput}
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {errors.subject && <div className={styles.errorMessage}>{errors.subject}</div>}
            </div>
            <div className={`${styles.formc} ${errors.comment ? styles.error : ''}`}>
              <label>Comments / Questions:</label>
              <textarea
                className={styles.textArea}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              {errors.comment && <div className={styles.errorMessage}>{errors.subject}</div>}
            </div>
          <div className={styles.recaptchaContainer}>
            <GoogleReCaptcha
              sitekey={Google_Recaptcha_API_KEY}
              onChange={onChange}
            />
            </div>
            {captchaIsDone ? (
              <button className={styles.submitButton}>
                Submit
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
