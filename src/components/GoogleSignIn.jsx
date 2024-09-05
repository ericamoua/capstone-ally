import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleLognIn = () => {
    const navigate = useNavigate(); 

    const handleSignIn = () => {
       
        const authUrl = 'https://my-backend.vercel.app/auth/google';
        window.location.assign(authUrl);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <button className="login-button" onClick={handleSignIn}>
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleLognIn;