import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UsersList } from '../../users/UsersList';
import { UserById } from '../../users/UserById';
import { UserEdit } from '../../users/UserEdit';
import { AuthenticatedRoute } from '../../../core/guards/AuthenticationRoute';
import { TasksList } from '../../tasks/TasksList';
import { EditTask } from '../../tasks/EditTask';
import { TasksByUser } from '../../tasks/TasksByUser';
import './Main.css';

export function Main() {
    return (
        <div className="main" id="body">
            <Switch>
                <AuthenticatedRoute exact path="/users" admin={true} component={UsersList}></AuthenticatedRoute>
                <AuthenticatedRoute exact path="/users/create" admin={true} component={UserEdit} />
                <AuthenticatedRoute exact path="/users/:id" admin={true} component={UserById}></AuthenticatedRoute>
                <AuthenticatedRoute exact path="/users/edit/:id" admin={true} component={UserEdit} />
                <AuthenticatedRoute exact path="/all-tasks" component={TasksList} />
                <AuthenticatedRoute exact path="/tasks" component={TasksByUser} />
                <AuthenticatedRoute exact path="/tasks/create" component={EditTask} />
                <AuthenticatedRoute exact path="/tasks/edit/:id" component={EditTask } />
            </Switch>
        </div>
    );
}