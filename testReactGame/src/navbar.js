import React from 'react';
import App from './App.js';

const Navbar = (props) => {
    return (
        <div>
        <nav>
    <div class="nav-wrapper">
      React Game
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>Score: 000</li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  </nav>
  </div>
    );
}

export default Navbar;