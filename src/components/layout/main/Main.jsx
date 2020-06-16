import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UsersList } from '../../users/UsersList';
import { UserById } from '../../users/UserById';

export function Main() {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/users" component={UsersList}></Route>
                <Route exact path="/users/:id" component={UserById}></Route>
            </Switch>
        </div>
    );
}