import React, { Component } from 'react';
import { tiles, mapClass } from './levels/level_1';
import { tiles2, mapClass2 } from './levels/level_2';
import { tiles3 } from './levels/level_3';
import Map from './map/Map';
import Snake from './monsters/Snake';
import Player from './Player.js';
import './App.css';
import './map/Map.css';
import Rathalos from './monsters/Ratahlos';
import CaveDrag from './monsters/CaveDragon';
import { tiles4 } from './levels/level_4';
import { tiles5 } from './levels/level_5';
import { tiles6 } from './levels/level_6';
import { tiles7, mapClass3 } from './levels/level_7';
import Valk from './monsters/Valk';
import BK from './monsters/Blackknight';
import Skeleton from './monsters/Skeleton';
import { tiles8 } from './levels/level_8';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import API from './api';


class Game extends Component {
  state = {
    User: false,
    tiles: [],
    monsters: [],
    monsterSpeed: 600,
    gameTimer: true,
    score: 0,
    currentLevel: 1,
    mapClass: false,
    monsterTimer: 0,
    timer: 30,
    gameComplete: false,
  }

  constructor(props){
    super(props)
    this.state.User = props.User
  }

  baseState = this.state
  componentDidMount() {
    this.init();
  }

  init = () => {
    console.log("init");
    console.log(this.state.User)
    console.log(this.state.gameTimer);
    const currentLevel = this.state.currentLevel;
    let startingTiles;
    let newMapClass;
    switch (currentLevel) {
      case 1:
        startingTiles = tiles
        newMapClass = mapClass
        break
      case 2:
        startingTiles = tiles2
        newMapClass = mapClass2
        break
      case 3:
        startingTiles = tiles3
        newMapClass = mapClass2
        break
      case 4:
        startingTiles = tiles4
        newMapClass = mapClass2
        break
      case 5:
        startingTiles = tiles5
        newMapClass = mapClass2
        break
      case 6:
        startingTiles = tiles6
        newMapClass = mapClass2
        break
      case 7:
        startingTiles = tiles7
        newMapClass = mapClass3
        break
      case 8:
        startingTiles = tiles8
        newMapClass = mapClass3
        break
      default:
        startingTiles = tiles
        newMapClass = mapClass
    }
    console.log(startingTiles)
    let monsters = [];
    let player;



    const newTiles = startingTiles.map((row, i) => {
      return row.map((tile, j) => {
        switch (tile) {
          case 1:
            return {
              type: tile,
              isSolid: true,
              component: <div className="tile tree">&nbsp;</div>,
            }
          case 2:
            return {
              type: tile,
              isSolid: true,
              component: <div className="tile rock">&nbsp;</div>,
            }
          case 3:
            let newMonster = {
              x: j,
              y: i,
              type: tile,
              isSolid: true,
              speed: 300,
              direction: "right",
              component: (direction) => <Snake direction={direction} />
            };
            monsters.push(newMonster);
            return {
              type: newMonster.type,
              isSolid: true,
              component: newMonster.component("right"),
            }
          case 4:
            player = {
              x: j,
              y: i,
              type: tile,
              isSolid: true,
              direction: "right",
              component: (direction) => <Player direction={direction} />
            };
            return {
              type: player.type,
              isSolid: true,
              component: player.component("right"),
            }
          case 5:
            newMonster = {
              x: j,
              y: i,
              type: tile,
              isSolid: true,
              speed: 300,
              direction: "left",
              component: (direction) => <Rathalos direction={direction} />
            };
            monsters.push(newMonster);
            return {
              type: newMonster.type,
              isSolid: true,
              component: newMonster.component("left"),
            }
          case 6:
            return {
              type: tile,
              isSolid: false,
              component: <div className="tile diamond">&nbsp;</div>,
            }
          case 7:
            return {
              type: tile,
              isSolid: false,
              component: <div className="coin">&nbsp;</div>,
            }
          case 8:
            return {
              type: tile,
              isSolid: true,
              component: <div className="tile stalagmite">&nbsp;</div>,
            }
          case 9:
            return {
              type: tile,
              isSolid: false,
              component: <div className="tile tree">&nbsp;</div>
            }
          case 10:
            return {
              type: tile,
              isSolid: false,
              component: <div className="tile cave">&nbsp;</div>,
            }
          case 11:
            return {
              type: tile,
              isSolid: true,
              component: <div className="tile topstalag">&nbsp;</div>,
            }
          case 12:
            return {
              type: tile,
              isSolid: true,
              component: <div className="tile caverock">&nbsp;</div>,
            }
          case 13:
            return {
              type: tile,
              isSolid: false,
              component: <div className="tile stalagmite">&nbsp;</div>,
            }
          case 14:
            return {
              type: tile,
              isSolid: false,
              component: <div className="tile rock">&nbsp;</div>,
            }
          case 15:
            return {
              type: tile,
              isSolid: false,
              component: <div className="tile cavehole">&nbsp;</div>,
            }
          case 16:
            newMonster = {
              x: j,
              y: i,
              type: tile,
              isSolid: true,
              speed: 300,
              direction: "left",
              component: (direction) => <CaveDrag direction={direction} />
            };
            monsters.push(newMonster);
            return {
              type: newMonster.type,
              isSolid: true,
              component: newMonster.component("left"),
            }
          case 17:
            return {
              type: tile,
              isSolid: true,
              component: <div className="tile caveladder">&nbsp;</div>,
            }
          case 18:
            return {
              type: tile,
              isSolid: false,
              component: <div className="tile topstalag">&nbsp;</div>,
            }
          case 19:
            return {
              type: tile,
              isSolid: true,
              component: <div className="tile caveexit">&nbsp;</div>,
            }
          case 20:
            newMonster = {
              x: j,
              y: i,
              type: tile,
              isSolid: true,
              speed: 300,
              direction: "left",
              component: (direction) => <Skeleton direction={direction} />
            };
            monsters.push(newMonster);
            return {
              type: newMonster.type,
              isSolid: true,
              component: newMonster.component("right"),
            }
          case 21:
            newMonster = {
              x: j,
              y: i,
              type: tile,
              isSolid: true,
              speed: 300,
              direction: "left",
              component: (direction) => <BK direction={direction} />
            };
            monsters.push(newMonster);
            return {
              type: newMonster.type,
              isSolid: true,
              component: newMonster.component("left"),
            }
          case 22:
            newMonster = {
              x: j,
              y: i,
              type: tile,
              isSolid: true,
              speed: 300,
              direction: "left",
              component: (direction) => <Valk direction={direction} />
            };
            monsters.push(newMonster);
            return {
              type: newMonster.type,
              isSolid: true,
              component: newMonster.component("right"),
            }
          case 23:
            return {
              type: tile,
              isSolid: true,
              component: <div className="tile vase">&nbsp;</div>,
            }
          case 24:
            return {
              type: tile,
              isSolid: true,
              component: <div className="tile barrel">&nbsp;</div>,
            }
          case 25:
            return {
              type: tile,
              isSolid: false,
              component: <div className="tile vase">&nbsp;</div>,
            }
          case 26:
            return {
              type: tile,
              isSolid: false,
              component: <div className="tile barrel">&nbsp;</div>,
            }
          case 27:
            return {
              type: tile,
              isSolid: true,
              component: <div className="tile portal">&nbsp;</div>,
            }
          case 28:
            return {
              type: tile,
              isSolid: true,
              component: <div className="tile crate">&nbsp;</div>,
            }
          case 29:
            return {
              type: tile,
              isSolid: false,
              component: <div className="tile crate">&nbsp;</div>,
            }
          default:
            return {
              type: tile,
              isSolid: false,
              component: <div className="tile empty">&nbsp;</div>,
            }
        }
      });
    });

    document.addEventListener('keyup', this.keyHandler);

    const monsterTimer = setTimeout(this.moveMonsters, this.state.monsterSpeed);

    const levelTimer = setInterval(() => {
      let currentTime = this.state.timer;
      if (this.state.timer === 0) {
        return this.timesUp();
      }
      this.setState({
        timer: currentTime - 1
      })
    }, 1000);

    this.setState({
      timer: 45,
      tiles: newTiles,
      monsters,
      gameTimer: true,
      player,
      mapClass: newMapClass,
      levelTimer,
      monsterTimer
    });
  }

  collectCoin = () => {
    let score = this.state.score + 100;
    console.log(score);
    this.setState({
      score: score
    })
    API.postScore(this.state.User, {score: this.state.score}).then(res => {
      console.log(res)
      res.data.score = this.state.score
      this.setState({
        score: res.data.score
      })
    }).catch(err => console.log(err))
  }

  collectDiamond = () => {
    let score = this.state.score + 1000;
    console.log(score);
    this.setState({
      score: score
    })
    API.postScore(this.state.User, {score: this.state.score}).then(res => {
      res.data.score = this.state.score
      this.setState({
        score: res.data.score
      })
    }).catch(err => console.log(err))
  }

  changeLevel = () => {
    window.clearInterval(this.state.levelTimer)
    let difficultyUp;
    if (this.state.monsterSpeed > 200) {
      difficultyUp = this.state.monsterSpeed - 100;
    }
    if (this.state.monsterSpeed <= 200){
      difficultyUp = 200;
    }
    if (this.state.currentLevel === 8){
      this.setState({
        gameTimer: false,
        gameComplete: true
      })
       return <Redirect to="/leaderboard" />
    }
    let changeLevel = this.state.currentLevel + 1;
    console.log(this.state.monsterTimer);
    window.clearTimeout(this.state.monsterTimer);
    this.setState({
      currentLevel: changeLevel,
      tiles: [],
      gameTimer: false,
      monsterSpeed: difficultyUp
      // monsterSpeed: 700, Even if the setTimeout didn't work, why is it if we changed their state to their original speed, it still 
      // increases? Is it because the setTimeout is basically being doubled or called multiple times?
    }, () => this.init())
  }


  moveMonsters = () => {
    const newTiles = this.state.tiles;
    const monsters = this.state.monsters;

    monsters.forEach((monster, i) => {
      let movement;
      monster.direction === "right" ? movement = 1 : movement = -1;
      if (!newTiles[monster.y][monster.x + movement].isSolid) {
        // console.log("Monster can move");
        newTiles[monster.y][monster.x + movement].type = monster.type;
        newTiles[monster.y][monster.x + movement].isSolid = monster.isSolid;
        newTiles[monster.y][monster.x + movement].component = monster.component(monster.direction);

        newTiles[monster.y][monster.x].type = 0;
        newTiles[monster.y][monster.x].isSolid = false;
        newTiles[monster.y][monster.x].component = <div className="tile empty">&nbsp;</div>;
        monster.x = monster.x + movement;
      } else if (newTiles[monster.y][monster.x + movement].type === 4) {
        this.battle();
      } else {
        // console.log("Monster cannot move");
        monster.direction === "right" ? monster.direction = "left" : monster.direction = "right";
        newTiles[monster.y][monster.x].component = monster.component(monster.direction);
      }
      monsters[i] = monster;
    });

    let resetMonster;
    if (this.state.gameTimer) {
      resetMonster = setTimeout(this.moveMonsters, this.state.monsterSpeed)
    };

    this.setState({
      tiles: newTiles,
      monsters: monsters,
      monsterTimer: resetMonster
    });
  }

  movePlayer = (xMod, yMod) => {
    const newTiles = this.state.tiles;
    const player = this.state.player;
    let newX = player.x + xMod;
    let newY = player.y + yMod;
    let callBack = () => { };

    player.x + xMod >= player.x ? player.direction = "right" : player.direction = "left";

    if (newY < newTiles.length && newY > -1) {
      if (newX < newTiles[newY].length && newX > -1 && newTiles[newY][newX].type === 7) {
        // this.collectCoin();
        callBack = this.collectCoin;
      }
      if (newX < newTiles[newY].length && newX > -1 && newTiles[newY][newX].type === 6) {
        //this.collectDiamond();
        callBack = this.collectDiamond;
      }
      if (newX < newTiles[newY].length && newX > -1 && newTiles[newY][newX].type === 10) {
        // this.changeLevel();
        callBack = this.changeLevel;
      }
      if (newX < newTiles[newY].length && newX > -1 && newTiles[newY][newX].type === 15) {
        // this.changeLevel();
        callBack = this.changeLevel;
      }
      if (newX < newTiles[newY].length && newX > -1 && newTiles[newY][newX].type === 17) {
        // this.changeLevel();
        callBack = this.changeLevel;
      }
      if (newX < newTiles[newY].length && newX > -1 && newTiles[newY][newX].type === 19) {
        // this.changeLevel();
        callBack = this.changeLevel;
      }
      if (newX < newTiles[newY].length && newX > -1 && newTiles[newY][newX].type === 27) {
        // this.changeLevel();
        callBack = this.changeLevel;
      }
      if (newX < newTiles[newY].length && newX > -1 && !newTiles[newY][newX].isSolid) {
        newTiles[newY][newX].type = player.type;
        newTiles[newY][newX].isSolid = player.isSolid;
        newTiles[newY][newX].component = player.component(player.direction);

        newTiles[player.y][player.x].type = 0;
        newTiles[player.y][player.x].isSolid = false;
        newTiles[player.y][player.x].component = <div className="tile empty">&nbsp;</div>;
        player.x = newX;
        player.y = newY;
        // }else if(newX < newTiles[newY].length && newX > -1 && newTiles[newY][newX].type === 3){
        // this.battle();
      }

    }

    this.setState({
      tiles: newTiles,
      player: player,
    }, () => callBack());
  }

  battle = () => {
    let playerDied;
    alert("You've died! Press Reset to play the level again.");
    if (this.state.score > 0) {
      playerDied = this.state.score - 1500;
      this.setState({
        gameTimer: false,
        score: playerDied,
      });
      if (this.state.score < 0) {
        playerDied = 0;
        this.setState({
          gameTimer: false,
          score: playerDied
        });
      }
      clearInterval(this.state.levelTimer)
    }
    else if (this.state.score <= 0) {
      playerDied = 0
      this.setState({
        gameTimer: false,
        score: playerDied
      });
      clearInterval(this.state.levelTimer)
    }
    console.log(this.state);
  }

  timesUp = () => {
    window.clearInterval(this.state.levelTimer)
    window.clearTimeout(this.state.monsterTimer);
    console.log(this.state.monsterTimer)
    alert("You've ran out of time! Better luck next time!")
    this.setState(this.baseState, this.init);
  }

  resetGame = () => {
    if (!this.state.gameTimer) {
      this.init();
    }
  }


  componentWillUnmount(){
    window.clearInterval(this.state.levelTimer)
    window.clearTimeout(this.state.monsterTimer);
    this.setState({
      gameTimer: false
    })
  }

  keyHandler = (event) => {
    // console.log(event.key);
    if (this.state.gameTimer) {
      if (event.key === "ArrowUp" || event.key === "w") {
        this.movePlayer(0, -1);
      }
      if (event.key === "ArrowLeft" || event.key === "a") {
        this.movePlayer(-1, 0);
      }
      if (event.key === "ArrowDown" || event.key === "s") {
        this.movePlayer(0, 1);
      }
      if (event.key === "ArrowRight" || event.key === "d") {
        this.movePlayer(1, 0);
      }
    }
  }

  render() {
    // console.log(this.state.tiles)
    if(this.state.gameComplete){
      return <Redirect to="/leaderboard" />
    }
    return (
      <div className="Game">
        {this.state.tiles.length > 0 ? <Map tiles={this.state.tiles} mapClass={this.state.mapClass} score={this.state.score} resetGame={this.resetGame} gameTimer={this.state.gameTimer} timer={this.state.timer} /> : <div></div>}
      </div>
    );
  }
}

export default Game;
