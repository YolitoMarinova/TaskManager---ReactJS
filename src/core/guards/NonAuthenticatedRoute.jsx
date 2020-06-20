import React from 'react';
import { getLoggeduser } from '../api/users.api';
import { Redirect } from 'react-router-dom';

export function NonAuthenticatedRoute(props) {
    const loggedUser = getLoggeduser();

    if (!loggedUser) {
        return <props.component {...props} />
    }

    return <Redirect to='/' />
}