import React, { useEffect, useState } from 'react';
import styles from '../styles/UserList.module.css';

function UserList() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newEmail, setNewEmail] = useState('');

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

    const handleSelectUser = (user) => {
        setSelectedUser(user);
        setNewEmail(user.email);
    };

    const handleEmailChange = (e) => {
        setNewEmail(e.target.value);
    };

    const handleUpdateEmail = () => {
        if (selectedUser) {
            fetch(`https://ecommercev2-ytjg.onrender.com/api/users/${selectedUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: newEmail }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(updatedUser => {
                    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
                    setSelectedUser(null);
                })
                .catch(error => console.error('Error updating user:', error));
        }
    };

    const handleDeleteUser = (userId) => {
        fetch(`https://ecommercev2-ytjg.onrender.com/api/users/${userId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setUsers(users.filter(user => user.id !== userId));
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Current Users</h1>
            {users.map(user => (
                <div key={user.id} className={styles.userItem}>
                    <p>{user.email}</p>
                    <button onClick={() => handleSelectUser(user)}>Edit</button>
                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </div>
            ))}

            {selectedUser && (
                <div className={styles.editForm}>
                    <h2>Edit User</h2>
                    <input
                        type="email"
                        value={newEmail}
                        onChange={handleEmailChange}
                    />
                    <button onClick={handleUpdateEmail}>Update Email</button>
                    <button onClick={() => setSelectedUser(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default UserList;
