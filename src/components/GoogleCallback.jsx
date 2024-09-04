// src/components/GoogleCallback.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleCallback = () => {
    const history = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Make a request to your backend to check if the user is authenticated
                const response = await fetch('http://localhost:30003/auth/login/success', {
                    method: 'GET',
                    credentials: 'include' // Include cookies for authentication
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('User data:', data);
                    // Redirect to a different page or set user context
                    history.push('/dashboard'); // Or wherever you want to redirect
                } else {
                    throw new Error('Authentication failed');
                }
            } catch (error) {
                console.error('Authentication failed:', error);
                history.push('/login');
            }
        };

        fetchUser();
    }, [history]);

    return <div>Loading...</div>;
};

export default GoogleCallback;
