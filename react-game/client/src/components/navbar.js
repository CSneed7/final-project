import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Navbar = (props) => {
  return (
      <nav>
        <div className="nav-wrapper">
          React Game
      <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>Time Left: {props.timer}</li>
            <li>Score: {props.score}</li>
            <li><Link to="/titlescreen" className={window.location.pathname === "/titlescreen" ? "button" : ""}>Titlescreen</Link></li>
            <li><button onClick={props.resetGame} disabled={props.gameTimer}>Restart Level</button></li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;