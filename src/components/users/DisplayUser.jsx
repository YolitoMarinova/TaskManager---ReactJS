import React from 'react';
import './DisplayUser.css'
import { Link } from 'react-router-dom';

export function DisplayUser({ user }) {
    return (
        <div className="display-user">
            <div className="img-holder">
                <img src={user.picture} alt="userPicture"></img>
            </div>
            <div className="info-holder">
                <span className="name"><p>Name: <Link to={`/users/${user.id}`}>{user.name}</Link></p></span>
                <span className="age"><p>Age: {user.age}</p></span>
                <span className="email"><p>Email: {user.email}</p></span>
            </div>
        </div>
    )
}