import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Registration form</Link>
          </li>
          <li className="navbar-item">
          <Link to="/payment" className="nav-link">Make Payment</Link>
          </li>
          <li className="navbar-item">
          <Link to="/tuser" className="nav-link">Transfer certificate</Link>
          </li>
         {/*} <li className="navbar-item">
          <Link to="/tverify" className="nav-link">Verify User</Link>
    </li>*/}
        </ul>
        </div>
      </nav>
    );
  }
}
