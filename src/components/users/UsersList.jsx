import React, { useState, useEffect } from 'react';
import { getAllUsers, deleteUser, getLoggeduser } from './../../core/api/users.api'
import { DisplayUser } from './DisplayUser';
import { Link } from 'react-router-dom';

export function UsersList() {
    const [users, setUsers] = useState([]);

    const userId = getLoggeduser().id;

    useEffect(() => {
        getAllUsers().then((allUsers) => {
            setUsers(allUsers.data);
        })
    }, []);

    const onUserDelete = (id) => {
        deleteUser(id).then(() => {
            setUsers((prevState) => {
                return prevState.filter(u => u.id !== id);
            })
        }).catch((err) => console.error(err))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="create-link col-md-12">
                    <Link to="/users/create"><svg className="bi bi-person-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm4.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                        <path fillRule="evenodd" d="M13 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z" />
                    </svg> Create new user</Link>
                </div>
                <div className="users-list d-flex">
                    {users.filter(u => u.id !== userId).map((u) => <DisplayUser user={u} key={u.id} onDelete={onUserDelete}></DisplayUser>)}
                </div>
            </div>
        </div>
    );
}