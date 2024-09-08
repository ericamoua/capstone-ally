import { useNavigate } from 'react-router-dom';
// fetch request  to log out user
export const handleLogout = async (navigate, setLoggedIn) => {
    try {
        const response = await fetch('https://ecommercev2-ytjg.onrender.com/api/logout', {
            method: 'GET',
            credentials: 'include' 
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);

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
