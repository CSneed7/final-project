import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class Instructions extends Component {
  render() {
    return (
      <div className="mainPage">
  <h1>Welcome!</h1>
  <br></br>
    <p>Using the<div className="wasd"></div>keys or the <div className="arrowkeys"></div> keys you will move the character around the map to collect coins and find the path to the hidden gem!<br></br>
        Avoid the MONSTERS you see otherwise it'll ding your score and start you back at the beginning of the level!<br></br>
        In addition, you have 45 SECONDS to complete the level otherwise, you'll have to start from the beginning all over again with a score of zero!<br></br>
        Try to reach the end without running into any MONSTERS while collecting all coins and gems to achieve a perfect score!<br></br>
        Good luck, Adventurers!
    </p>

    <Link to="/titlescreen" className={window.location.pathname === "/titlescreen" ? "button" : "button"}>Back</Link>

</div>
    );
  }
}

export default Instructions;
