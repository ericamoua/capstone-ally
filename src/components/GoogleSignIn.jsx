import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleLognIn = () => {
    const history = useNavigate();

    const handleSignIn = () => {
        
        window.location.href = 'https://capstone-ally-api.vercel.app/auth/google';
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
