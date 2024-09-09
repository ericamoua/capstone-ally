import React from 'react';

const GoogleLognIn = () => {
    const handleSignIn = () => {
        window.location.href = 'https://ecommercev2-ytjg.onrender.com/auth/google';
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleSignIn}>
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleLognIn;
