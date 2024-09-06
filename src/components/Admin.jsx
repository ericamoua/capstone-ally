import React, { useEffect, useState } from 'react';
import styles from '../styles/UserList.module.css';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://ecommercev2-ytjg.onrender.com/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>User Emails</h1>
            {users.map(user => (
                <div key={user.id} className={styles.userItem}>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default UserList;
