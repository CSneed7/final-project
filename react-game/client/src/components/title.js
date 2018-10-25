import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class Title extends Component {
    render() {
        return (
            <div className="mainPage">
                <h1>Welcome!</h1>
                <br></br>

                <Link to="/game" className={window.location.pathname === "/game" ? "button" : "button"}>Play Game</Link>
                <br></br>
                <Link to="/howtoplay" className={window.location.pathname === "/howtoplay" ? "button" : "button"}>How to Play</Link>
                <br></br>
                <Link to="/leaderboard" className={window.location.pathname === "/leaderboard" ? "button" : "button"}>Leaderboard</Link>
                <br></br>
                <Link to="/" className={window.location.pathname === "/" ? "button" : "button"}>Log Out</Link>
            </div>
        );
    }
}

export default Title;
