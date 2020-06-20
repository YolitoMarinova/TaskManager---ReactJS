import React from 'react';
import './Login.css';
import { useState } from 'react';
import { login } from '../../../core/api/users.api';
import { Redirect, Link } from 'react-router-dom';

export function Login(props) {

    const [userData, setUserData] = useState({});
    const [isLoggedUser, setLoggedUser] = useState(false);

    const onInputChange = (event) => {
        event.persist();

        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        login(userData).then(() => {
            console.log('Login succsed');
            setLoggedUser(true);
        })
            .catch((err) => console.error(err));
    };

    return (
        <>
            {isLoggedUser && <Redirect to="/" />}
            <div className="login-wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={onFormSubmit}>
                        <input type="email" id="email" className="fadeIn second" name="email" placeholder="email" onChange={onInputChange} />
                        <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" onChange={onInputChange} />
                        <input type="submit" className="fadeIn fourth" value="Login" />
                    </form>
                    <div id="formFooter">
                    <Link to='/register'>Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
}