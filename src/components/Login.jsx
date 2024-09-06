

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logInCss from '../styles/Login.module.css';
import { SocialIcon } from 'react-social-icons'
import companyLogo from '..//assets/budget-logo.png';

function Login() {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            const response = await fetch('https://ecommercev2-ytjg.onrender.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);

                // Redirect based on user role
                if (data.isAdmin) {
                    // Redirect to admin page if user is an admin
                    navigate('/admin');
                } else {
                    // Redirect to home page if user is not an admin
                    navigate('/'); 
                }
            } else {
                const errorMessage = await response.json();
                setError(errorMessage.message || 'Login failed.');
            }
        } catch (error) {
            setError('Invalid login credentials');
        }
    };

    return (
        <div className={logInCss.formBody}>
          <div className={logInCss.formContainer}>
      
            <form className={logInCss.form} onSubmit={handleSubmit}>
            <div className={logInCss.logoContainer}>
      <img src={companyLogo} className={logInCss.homeLogo}></img>
      <h1>Login</h1>
    </div>
                <div className={logInCss.logInContainer}>
                   
                {error && <p style={{ color: 'red' }}>{error}</p>}
                    <input
                        type="email"
                        placeholder="Email Address"
                        className={logInCss.logInInput}
                        name="username"
                        value={username}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={logInCss.passwordInput}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={logInCss.signUpContainer}>
                        <button type="submit" className={logInCss.submitBtn}>Log In</button>
                        <div className={logInCss.signUpContainer}>
                            <p>Don't have an account?</p>
                            <Link to="/register">Sign up</Link>
                            <h5>OR</h5>
                          <Link to="/google">
                          <button className={logInCss.googleBtn}>
                                <SocialIcon url="https://www.google.com/" style={{ margin: ".5rem" }} />
                                Continue with Google
                            </button>
                          </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Login;
