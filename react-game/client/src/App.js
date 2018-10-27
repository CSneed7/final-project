import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/signup";
import Game from "./game";
import Instructions from "./components/instructions";
import Title from "./components/title";
import API from "./api"
import Leaderboard from "./components/leaderboard";

class App extends React.Component {
  state = {
    user_id: false
  }

  setUser = User => {this.setState({user_id: User})}
  render() {
    return (
      < Router >
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser}/>} />
          <Route exact path="/signup" render={() => <Register setUser={this.setUser}/>} />
          <Route exact path="/game" render={() => <Game User={this.state.user_id}/>} />
          <Route exact path="/titlescreen" component={Title} />
          <Route exact path="/howtoplay" component={Instructions} />
          <Route exact path="/leaderboard" render={() => <Leaderboard User={this.state.user_id}/>} />
        </div>
      </Router >
    )
  }
}

export default App;