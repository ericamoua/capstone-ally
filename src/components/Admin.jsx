
import React, { useEffect, useState } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

    // Fetch the user data when the component mounts
    useEffect(() => {
        fetch('https://ecommercev2-ytjg.onrender.com/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, []); 
   
    return (
        <div>
            <h1>Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                 
                </div>
            ))}
        </div>
    );
}

export default UserList;