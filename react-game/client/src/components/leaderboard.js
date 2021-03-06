import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
import API from '../api';

class Leaderboard extends Component {
  state = {
    User: false,
    score: 0,
    username: false,
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
        usernames: res.data
      })
       console.log("work pls")
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="mainPage">
        <h1>Whose on top!</h1>
        <br></br>
        <div className="allScores">
        {this.state.usernames && 
        this.state.usernames.map(user => <div className="scores">{user.username + ": " + user.score}</div>)
        }
        </div>
        <br></br>
        <h2>Your Score:</h2>
        <div className="yourScore">{this.state.username}: {this.state.score}</div>
        <br></br>
        <Link to="/titlescreen" className={window.location.pathname === "/titlescreen" ? "button" : "button"}>Back</Link>

      </div>
    );
  }
}

export default Leaderboard;