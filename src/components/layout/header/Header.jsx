import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { logOut } from '../../../core/api/users.api';
import { useState } from 'react';


export function Header() {

  const [isLoggedOut, setLoggOutFlag] = useState(false);

  const onLogout = (event) => {
    logOut();
    setLoggOutFlag(true);
  }

  return (
    <>
    {isLoggedOut && <Redirect to="/login" />}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>  
            <li className="nav-item">
              <Link className="nav-link" to="/notes">Notes</Link>
            </li>    
            <li className="nav-item">
              <Link className="nav-link" to="/notes/create">Create note</Link>
            </li>           
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <button className="btn btn-secondary" onClick={onLogout}>Log out</button>
        </div>
      </nav>
    </>
  );
}