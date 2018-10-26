import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class Leaderboard extends Component {
  state = {
    User: false
  }

  constructor(props){
    super(props)
    this.state.User = props.User
  }
  render() {
    console.log(this.state.User)
    return (
      <div className="mainPage">
        <h1>Whose on top!</h1>
        <br></br>
        <div>WIP</div>
        <Link to="/titlescreen" className={window.location.pathname === "/titlescreen" ? "button" : "button"}>Back</Link>

      </div>
    );
  }
}

export default Leaderboard;