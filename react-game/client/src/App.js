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

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Register} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/titlescreen" component={Title} />
      <Route exact path="/howtoplay" component={Instructions} />
      <Route exact path="/leaderboard" component={Leaderboard} />
    </div>
  </Router>
);

export default App;