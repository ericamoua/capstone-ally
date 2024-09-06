import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logInCss from '../styles/Login.module.css';
import { SocialIcon } from 'react-social-icons';
import companyLogo from '..//assets/budget-logo.png';

function Login() {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // Add state to track login status
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

                // Set login status and redirect based on user role
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

    const handleLogout = async () => {
        try {
            const response = await fetch('https://ecommercev2-ytjg.onrender.com/api/logout', {
                method: 'GET',
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message);

               //check if user is logged in
                setLoggedIn(false);
                navigate('/login');
            } else {
                const errorMessage = await response.json();
                console.error(errorMessage.message || 'Logout failed.');
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div className={logInCss.formBody}>
            <div className={logInCss.formContainer}>
                
                <form className={logInCss.form} onSubmit={handleSubmit}>
                    <div className={logInCss.logoContainer}>
                        <img src={companyLogo} className={logInCss.homeLogo} alt="Company Logo" />
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
                {loggedIn && (
                    <button onClick={handleLogout} className={logInCss.logoutBtn}>
                        Log Out
                    </button>
                )}
            </div>
        </div>
    );
}

export default Login;