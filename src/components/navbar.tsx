import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
          <a href="/" className="brand-logo">React and TS</a>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Tasks</NavLink></li>
            <li><NavLink to="/about">Info</NavLink></li>
          </ul>
      </div>
    </nav>
  )
}