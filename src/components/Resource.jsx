import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

// Assuming Nav and Footer components are imported or defined somewhere in your project
import Nav from './Nav';
import Footer from './Footer';

const Resource = () => {
  // State management for form inputs and errors
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const [capychaIsDone, setCapychaIsDone] = useState(false);
  const YOUR_SITE_KEY = '6LeYBRcqAAAAAICErRmaGeu6gKKyqIVZNgK3evcw';

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
      <Nav />
      <div className="contact-container">
        <div className="contact-image">
          <h1 className="contact-text">Contact Us Today!</h1>
        </div>
        <div className="container">
          <h2 className="contact-text-large">We would love to hear from you!</h2>
          <p className="contact-text-small">We value your feedback!</p>
          <form className="contact-form" onSubmit={validateForm}>
            <div className={`formc ${errors.firstName ? 'error' : ''}`}>
              <label>First Name:</label>
              <input
                className="user-input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div className={`formc ${errors.lastName ? 'error' : ''}`}>
              <label>Last Name:</label>
              <input
                className="user-input"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div className={`formc ${errors.email ? 'error' : ''}`}>
              <label>Email:</label>
              <input
                className="user-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className={`formc ${errors.subject ? 'error' : ''}`}>
              <label>Subject:</label>
              <input
                className="user-input"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {errors.subject && <p>{errors.subject}</p>}
            </div>
            <div className={`formc ${errors.comment ? 'error' : ''}`}>
              <label>Comments / Questions:</label>
              <textarea
                className="text-area"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              {errors.comment && <p>{errors.comment}</p>}
            </div>

            <ReCAPTCHA
              sitekey={YOUR_SITE_KEY}
              onChange={onChange}
              onExpired={onChange}
            />
            {capychaIsDone ? (
              <button>
                <span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
                <span className="circle4"></span>
                <span className="circle5"></span>
                <span className="text">Submit</span>
              </button>
            ) : null}
          </form>
        </div>
      </div>

      <main>
        <section className="hero">
          <h1>Your Complete Guide To Affordable Home <Buying></Buying></h1>
          <p>Buying a home that fits your budget can be stressful, but we're here to help. Learn how to buy home with articles and tips from our experts.</p>
        </section>


        <section className="hero2"></section>
      </main>

      <Footer />
    </>
  );
};

export default Resource;
