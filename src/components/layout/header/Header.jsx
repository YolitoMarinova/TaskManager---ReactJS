import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { logOut, getLoggeduser } from '../../../core/api/users.api';
import { useState } from 'react';
import './../../../../node_modules/font-awesome/css/font-awesome.css';
import './Header.css';

export function Header() {

  const [isLoggedOut, setLoggOutFlag] = useState(false);


  const onLogout = (event) => {
    logOut();
    setLoggOutFlag(true);
  }

  return (
    <>
      {isLoggedOut && <Redirect to="/login" />}
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
        <Link className="navbar-brand" to="/"><i className="fa fa-stack-exchange"></i></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {(!isLoggedOut && getLoggeduser().isAdmin) &&
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
            }
            <li className="nav-item">
              <Link className="nav-link" to="/all-tasks">All Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tasks">My Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tasks/create">Create task</Link>
            </li>
          </ul>          
          <button className="btn btn-secondary" onClick={onLogout}>Log out</button>
        </div>
      </nav>
    </>
  );
}