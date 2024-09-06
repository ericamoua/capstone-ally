import React, { useEffect, useState } from 'react';
import styles from '../styles/UserList.module.css';

function UserList() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

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

    const handleUpdate = () => {
        if (!editingUser) return;

        fetch(`https://capstone-ally-api.vercel.app/api/users/${editingUser.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editingUser),
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

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Users</h1>

            <table className={styles.userTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>
                                {editingUser && editingUser.id === user.id ? (
                                    <input
                                        type="text"
                                        value={editingUser.name}
                                        onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                                        className={styles.inputField}
                                    />
                                ) : (
                                    user.name
                                )}
                            </td>
                            <td>
                                {editingUser && editingUser.id === user.id ? (
                                    <input
                                        type="email"
                                        value={editingUser.email}
                                        onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                                        className={styles.inputField}
                                    />
                               
                                    ) : (
                                        user.email
                                    )}
                                </td>
                                <td>
                                    {editingUser && editingUser.id === user.id ? (
                                        <div>
                                            <button onClick={handleUpdate} className={styles.button}>Save</button>
                                            <button onClick={() => setEditingUser(null)} className={styles.button}>Cancel</button>
                                        </div>
                                    ) : (
                                        <div>
                                            <button onClick={() => setEditingUser(user)} className={styles.button}>Edit</button>
                                            <button onClick={() => handleDelete(user.id)} className={styles.button}>Delete</button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    
    export default UserList;
    