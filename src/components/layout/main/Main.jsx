import React from 'react';
import { Switch } from 'react-router-dom';
import { UsersList } from '../../users/UsersList';
import { UserById } from '../../users/UserById';
import { UserEdit } from '../../users/UserEdit';
import { AuthenticatedRoute } from '../../../core/guards/AuthenticationRoute';
import { TasksList } from '../../tasks/TasksList';
import { EditTask } from '../../tasks/EditTask';


export function Main() {
    return (
        <div className="main">
            <Switch>
                <AuthenticatedRoute exact path="/users" admin={true} component={UsersList}></AuthenticatedRoute>
                <AuthenticatedRoute exact path="/users/create" admin={true} component={UserEdit} />
                <AuthenticatedRoute exact path="/users/:id" admin={true} component={UserById}></AuthenticatedRoute>
                <AuthenticatedRoute exact path="/users/edit/:id" admin={true} component={UserEdit} />
                <AuthenticatedRoute exact path="/tasks" component={TasksList} />
                <AuthenticatedRoute exact path="/tasks/create" component={EditTask} />
                <AuthenticatedRoute exact path="/tasks/edit/:id" component={EditTask } />
            </Switch>
        </div>
    );
}