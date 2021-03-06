import React, { useState, useEffect } from 'react';
import { getUserById, saveUser } from '../../core/api/users.api';
import { Redirect } from 'react-router-dom';

export function UserEdit(props) {

    const [editedUser, setEditedUser] = useState({ name: '', age: 0, username: '', email: '', password: '', isActive: false, isAdmin: false });
    const [isSuccess, setIsSucces] = useState(false);

    useEffect(() => {
        if (props.computedMatch.params.id) {
            getUserById(props.computedMatch.params.id).then((currUser) => {
                setEditedUser(currUser.data);
            });
        }
    }, [props.computedMatch.params.id]);


    const onInputChange = (event) => {
        event.persist();

        setEditedUser((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onCheckBoxChange = (event) => {
        event.persist();

        setEditedUser((prevState) => ({
            ...prevState,
            [event.target.name]:  event.target.ckeck
        }))
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        saveUser(editedUser).then(() => {
            setIsSucces(true);
        }).catch((err) => console.error(err));
    }


    return (
        <>
            {isSuccess && <Redirect to="/users"></Redirect>}
            <div className="user-edit-wapper">
                <form action="" className="user-edit-form" onSubmit={onFormSubmit}>
                    <input type="text" id="name" className="reg-fadeIn second" name="name" placeholder="name" onChange={onInputChange} value={editedUser.name} />
                    <input type="text" id="username" className="reg-fadeIn second" name="username" placeholder="username" onChange={onInputChange} value={editedUser.username} />
                    <input type="email" id="email" className="reg-fadeIn second" name="email" placeholder="email" onChange={onInputChange} value={editedUser.email} />
                    <input type="password" id="password" className="reg-fadeIn third" name="password" placeholder="password" onChange={onInputChange} value={editedUser.password} />
                    <input type="number" id="age" className="reg-fadeIn second" name="age" placeholder="age" onChange={onInputChange} value={editedUser.age} /><br />
                    <div>
                        <label>Banned</label>
                        <input type="checkbox" id="isActive" className="reg-fadeIn second" name="isActive" placeholder="isActive" onChange={onCheckBoxChange} checked={editedUser.isActive} />
                    </div>
                    <div>
                        <label>Admin</label>
                        <input type="checkbox" id="isAdmin" className="reg-fadeIn second" name="isAdmin" placeholder="isAdmin" onChange={onCheckBoxChange} checked={editedUser.isAdmin} /><br />
                    </div>
                    <input type="submit" className="reg-fadeIn fourth" value="Update" />
                </form>
            </div>
        </>
    )
}