import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import { AuthenticatedRoute } from './core/guards/AuthenticationRoute';
import { NonAuthenticatedRoute } from './core/guards/NonAuthenticatedRoute';
import { Register } from './components/authentication/register/Register';

import { Login } from './components/authentication/login/Login';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <NonAuthenticatedRoute exact path="/login" component={Login} />
        <NonAuthenticatedRoute exact path="/register" component={Register} />
        <AuthenticatedRoute path="/" component={Layout} />  
      </Switch>
    </div>
  );
}

export default App;
