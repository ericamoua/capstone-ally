import React, { useEffect, useState } from 'react';
import styles from '../styles/UserList.module.css'; 

function UserList() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [newUser, setNewUser] = useState({ name: '', email: '' });

    useEffect(() => {
        fetch('https://capstone-ally-api.vercel.app/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleUpdate = (user) => {
        fetch(`https://capstone-ally-api.vercel.app/api/users/${user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(updatedUser => {
                setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
                setEditingUser(null);
            })
            .catch(error => console.error('Error updating user:', error));
    };

    const handleDelete = (id) => {
        fetch(`https://capstone-ally-api.vercel.app/api/users/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    const handleAdd = () => {
        fetch('https://capstone-ally-api.vercel.app/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        })
            .then(response => response.json())
            .then(addedUser => {
                setUsers([...users, addedUser]);
                setNewUser({ name: '', email: '' });
            })
            .catch(error => console.error('Error adding user:', error));
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Users</h1>
            <div className={styles.userForm}>
                <h2>Add New User</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className={styles.inputField}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className={styles.inputField}
                />
                <button onClick={handleAdd} className={styles.button}>Add User</button>
            </div>

            {users.map(user => (
                <div key={user.id} className={styles.userItem}>
                    {editingUser && editingUser.id === user.id ? (
                        <div>
                            <h2>Edit User</h2>
                            <input
                                type="text"
                                value={editingUser.name}
                                onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                                className={styles.inputField}
                            />
                            <input
                                type="email"
                                value={editingUser.email}
                                onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                                className={styles.inputField}
                            />
                            <button onClick={() => handleUpdate(editingUser)} className={styles.button}>Save</button>
                            <button onClick={() => setEditingUser(null)} className={styles.button}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                            <div className={styles.userActions}>
                                <button onClick={() => setEditingUser(user)} className={styles.button}>Edit</button>
                                <button onClick={() => handleDelete(user.id)} className={styles.button}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UserList;
