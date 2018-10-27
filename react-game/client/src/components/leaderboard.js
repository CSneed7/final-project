import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
import API from '../api';

class Leaderboard extends Component {
  state = {
    User: false,
    score: 0,
    username: false,
    scores: 0,
    usernames: false,
  }

  constructor(props){
    super(props)
    this.state.User = props.User
  }
 
  componentDidMount(){
    API.userScore(this.state.User).then(res => {
      this.setState({
        score: res.data.score,
        username: res.data.username
      })
    }).catch(err => console.log(err))
    API.allScore().then(res => {
      console.log(res)
      this.setState({
        scores: res.data.score,
        usernames: res.data.username
      })
       console.log("work pls")
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="mainPage">
        <h1>Whose on top!</h1>
        <br></br>
        <div>{this.state.usernames}: {this.state.scores}</div>
        <br></br>
        <div>{this.state.username}: {this.state.score}</div>
        <Link to="/titlescreen" className={window.location.pathname === "/titlescreen" ? "button" : "button"}>Back</Link>

      </div>
    );
  }
}

export default Leaderboard;