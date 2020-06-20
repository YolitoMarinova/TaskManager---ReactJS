import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UsersList } from '../../users/UsersList';
import { UserById } from '../../users/UserById';
import { UserEdit } from '../../users/UserEdit';
import { AuthenticatedRoute } from '../../../core/guards/AuthenticationRoute';


export function Main() {
    return (
        <div className="main">
            <Switch>
                <AuthenticatedRoute exact path="/users" component={UsersList}></AuthenticatedRoute>
                <AuthenticatedRoute  exact path="/users/:id" component={UserById}></AuthenticatedRoute>
                <AuthenticatedRoute exact path="/users/edit/:id" component={UserEdit} />
            </Switch>
        </div>
    );
}