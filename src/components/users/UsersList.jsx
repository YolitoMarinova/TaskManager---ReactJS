import React, { useState, useEffect } from 'react';
import {getAllUsers} from './../../core/api/users.api'
import { DisplayUser } from './DisplayUser';

export function UsersList() {
const [users, setUsers] = useState([]);

useEffect(() => {
    getAllUsers().then((allUsers) => {
        setUsers(allUsers.data);
    })
}, []);

    return (
        <div className="users-list d-flex">
            {users.map(u => <DisplayUser user={u} key={u.id}></DisplayUser>)}
        </div>
    );
}