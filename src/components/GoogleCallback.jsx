import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleCallback = () => {
    const navigate = useNavigate(); // Corrected from history to navigate

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://ecommercev2-ytjg.onrender.com/auth/login/success', {
                    method: 'GET',
                    credentials: 'include' 
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('User data:', data);
                    navigate('/dashboard'); 
                } else {
                    throw new Error('Authentication failed');
                }
            } catch (error) {
                console.error('Authentication failed:', error);
                navigate('/login'); 
            }
        };

        fetchUser();
    }, [navigate]);

    return <div>Loading...</div>;
};

export default GoogleCallback;
