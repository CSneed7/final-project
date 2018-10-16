import React, { Component } from 'react';
import { tiles, mapClass } from './levels/level_1';
import { tiles2, mapClass2 } from './levels/level_2';
import { tiles3 } from './levels/level_3';
import Map from './Map.js';
import Snake from './Snake.js';
import Player from './Player.js';
import './App.css';
import './Map.css';
import Rathalos from './Ratahlos';
import CaveDrag from './CaveDragon';

class App extends Component {
  state = {
    tiles: [],
    monsters: [],
    monsterSpeed: 700,
    gameTimer: true,
    score: 0,
    currentLevel: 1,
    mapClass: false
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    console.log("init");
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

    this.setState({
      tiles: newTiles,
      monsters,
      gameTimer: true,
      player,
      mapClass: newMapClass,
      monsterTimer
    });
  }
  collectCoin = () => {
    let score = this.state.score + 100;
    console.log(score);
    this.setState({
      score: score
    })
  }
  collectDiamond = () => {
    let score = this.state.score + 1000;
    console.log(score);
    this.setState({
      score: score
    })
  }
  changeLevel = () => {
    let changeLevel = this.state.currentLevel + 1;
    console.log(this.state.monsterTimer);
    window.clearTimeout(this.state.monsterTimer);
    this.setState({
      currentLevel: changeLevel,
      tiles: [],
      gameTimer: false,
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

    if (this.state.gameTimer) setTimeout(this.moveMonsters, this.state.monsterSpeed);

    this.setState({
      tiles: newTiles,
      monsters: monsters,
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
    alert("You're dead! Reset the game.");

    this.setState({
      gameTimer: false,
    });
  }

  resetGame = () => {
    if (!this.state.gameTimer) {
      this.init();
    }
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
    return (
      <div className="App">
        {this.state.tiles.length > 0 ? <Map tiles={this.state.tiles} mapClass={this.state.mapClass} /> : <div></div>}
        <div className="controls">
          <button onClick={this.resetGame} disabled={this.state.gameTimer}>Reset Game</button>
        </div>
      </div>
    );
  }
}

export default App;
