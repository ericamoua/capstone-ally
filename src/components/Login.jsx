import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logInCss from '../styles/Login.module.css';
import { SocialIcon } from 'react-social-icons';

function Login() {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
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

                setLoggedIn(true);
                if (data.isAdmin) {
                    navigate('/admin');
                } else {
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

 
    const handleGoogleSignIn = () => {
        window.location.href = 'https://ecommercev2-ytjg.onrender.com/auth/google';
    };

    return (
        <div className={logInCss.formBody}>
            <div className={logInCss.formContainer}>
                
                <form className={logInCss.form} onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    
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
                                <Link to="/register">Sign Up</Link>
                                {/* <h5>OR</h5>
                                <button className={logInCss.googleBtn} onClick={handleGoogleSignIn}>
                                    <SocialIcon url="https://www.google.com/" style={{ margin: ".5rem" }} />
                                    Continue with Google
                                </button> */}
                            </div>
                        </div>
                    </div>
                </form>
            
            </div>
        </div>
    );
}

export default Login;
