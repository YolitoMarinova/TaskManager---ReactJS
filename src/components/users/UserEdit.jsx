import React, { useState, useEffect } from 'react';
import { getUserById, saveUser } from '../../core/api/users.api';
import { Redirect } from 'react-router-dom';

export function UserEdit(props) {

    const [editedUser, setEditedUser] = useState({ name: '', age: 0, email: '', password: '', isActive: false, isAdmin: false });
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
                    <input type="email" id="email" className="reg-fadeIn second" name="email" placeholder="email" onChange={onInputChange} value={editedUser.email} />
                    <input type="password" id="password" className="reg-fadeIn third" name="password" placeholder="password" onChange={onInputChange} value={editedUser.password} />
                    <input type="number" id="age" className="reg-fadeIn second" name="age" placeholder="age" onChange={onInputChange} value={editedUser.age} /><br />
                    <input type="checkbox" id="isActive" className="reg-fadeIn second" name="isActive" placeholder="isActive" onChange={onInputChange} checked={editedUser.isActive} />
                    <input type="checkbox" id="isAdmin" className="reg-fadeIn second" name="isAdmin" placeholder="isAdmin" onChange={onInputChange} checked={editedUser.isAdmin} /><br />
                    <input type="submit" className="reg-fadeIn fourth" value="Update" />
                </form>
            </div>
        </>
    )
}