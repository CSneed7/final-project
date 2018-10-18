import React from 'react';

const Navbar = (props) => {
  return (
      <nav>
        <div className="nav-wrapper">
          React Game
      <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>Time Left: {props.timer}</li>
            <li>Score: {props.score}</li>
            <li><a href="#">Logout</a></li>
            <li><button onClick={props.resetGame} disabled={props.gameTimer}>Restart Level</button></li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;