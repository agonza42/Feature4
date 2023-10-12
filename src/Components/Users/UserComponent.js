import React, { useState } from 'react';
import { createUser, getById, getAllUsers, removeUser } from '../../Common/Services/UserService';
// THIS COMPONENT FOR USERS IS IN PROGRESS, WE WILL USE THE SIGN UP AND USER AUTHENTICATION METHOD FOR FEATURE 5
/*
const UserComponent = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [users, setUsers] = useState([]);

    return (
        <div>
            {/* Inputs and Button for Create User *//*}
            <div>
                <input 
                    placeholder="Enter User Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    placeholder="Enter Password"
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <input 
                    placeholder="Enter Email"
                    value={email}
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <button onClick={() => {
                    createUser(name, password, email).then(result => {
                        console.log('User created:', result);
                    }).catch(error => {
                        console.error('Error creating user:', error);
                    });
                }}>
                    Create User
                </button>
            </div>

            <br />

            {/* Input and Button for Get User by ID *//*}
            <div>
                <input 
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                />
                <button onClick={() => {
                    getById(userId).then(result => {
                        console.log('Fetched user:', result);
                    });
                }}>
                    Get User By ID
                </button>
            </div>

            <br />

            {/* Button for Get All Users *//*}
            <div>
                <button onClick={() => {
                    getAllUsers().then(results => {
                        setUsers(results);
                        console.log('All users:', results);
                    });
                }}>
                    Get All Users
                </button>
                
                {/* Display All Users *//*}
                <ul>
                    {users.map(user => <li key={user.id}>{user.get('username')}</li>)}
                </ul>
            </div>

            <br />

            {/* Input and Button for Remove User by ID *//*}
            <div>
                <input 
                    placeholder="Enter User ID to Remove"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                />
                <button onClick={() => {
                    removeUser(userId).then(() => {
                        console.log('User removed:', userId);
                    });
                }}>
                    Remove User
                </button>
            </div>
        </div>
    );
}

export default UserComponent;
*/