import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
import API from '../api';

class Title extends Component {
    state = {
        formSubmitted: false
    }
    
    handleFormSubmit = event => {
        event.preventDefault();
            API.Logout({username: this.state.username, password: this.state.password}).then(res => {
            })
    };
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
                <button className="button" type="submit"
                    onClick={this.handleFormSubmit}>
                    Log Out
                </button>
            </div>
        );
    }
}

export default Title;
