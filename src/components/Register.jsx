import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerCss from '../styles/Register.module.css';

function Register() {
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setError('Both fields are required.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(username)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');

    try {
      const response = await fetch('https://ecommercev2-ytjg.onrender.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, isAdmin }), 
      });

      const contentType = response.headers.get('Content-Type');

      if (response.ok) {
        let data;
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          const text = await response.text();
          data = { message: text };
        }
        console.log('Registration successful:', data.message);
        navigate('/login');
      } else {
        const errorMessage = contentType && contentType.includes('application/json')
          ? await response.json()
          : await response.text();
        setError(errorMessage.message || 'Registration failed.');
      }
    } catch (error) {
      setError(error.message || 'An error occurred.');
    }
  };

  return (
    <div className={registerCss.formBody}> 
      <form className={registerCss.form} onSubmit={handleSubmit}>
        <div className={registerCss.formContainer}>
          <h1>Register</h1>
          {error && <p className={registerCss.error}>{error}</p>}
          <input
            type="email"
            placeholder="Email Address"
            className={registerCss.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={registerCss.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         
          <label className={registerCss.checkboxLabel}>
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            Admin
          </label>
          <button type="submit" className={registerCss.submitBtn}>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
