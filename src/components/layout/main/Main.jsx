import React from 'react';
import { Switch } from 'react-router-dom';
import { UsersList } from '../../users/UsersList';
import { UserById } from '../../users/UserById';
import { UserEdit } from '../../users/UserEdit';
import { AuthenticatedRoute } from '../../../core/guards/AuthenticationRoute';
import { NotesList } from '../../notes/NotesList';
import { EditNote } from '../../notes/EditNote';


export function Main() {
    return (
        <div className="main">
            <Switch>
                <AuthenticatedRoute exact path="/users" component={UsersList}></AuthenticatedRoute>
                <AuthenticatedRoute exact path="/users/create" admin={true} component={UserEdit} />
                <AuthenticatedRoute exact path="/users/:id" component={UserById}></AuthenticatedRoute>
                <AuthenticatedRoute exact path="/users/edit/:id" admin={true} component={UserEdit} />
                <AuthenticatedRoute exact path="/notes" component={NotesList} />
                <AuthenticatedRoute exact path="/notes/create" component={EditNote} />
                <AuthenticatedRoute exact path="/notes/edit/:id" component={EditNote } />
            </Switch>
        </div>
    );
}