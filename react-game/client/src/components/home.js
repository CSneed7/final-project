import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import API from '../api';


class Home extends Component {
    componentDidMount(){
        API.isLoggedIn().then(res => {console.log(res)})
    }
    render() {
        return (
                <div className="mainPage">
                    <h1>Adventure Game!</h1>
                    <br></br>

                    <Link to="/login" className={window.location.pathname === "/login" ? "button" : "button"}>Login</Link>

                    <Link to="/signup" className={window.location.pathname === "/signup" ? "button" : "button"}>Sign-Up</Link>

                    <hr />
                </div>
        );
    }
}

export default Home;
