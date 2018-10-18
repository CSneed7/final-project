import React from 'react';
import './Map.css';
import Navbar from './components/navbar';

const Map = (props) => {
    
    return (
      <div className="mapWrapper" style={{ width: `${props.tiles[0].length * 80}px`, height: `${props.tiles.length * 80}px` }}>
      <Navbar score={props.score} resetGame={props.resetGame} gameTimer={props.gameTimer} timer={props.timer}/>
        <div className={props.mapClass?"map "+ props.mapClass: "map grassmap"}>
          {props.tiles.map(row => {
              return <div className="row">{ row.map(tile => <div className="tile">{ tile.component }</div>) }</div>
          })}
        </div>
      </div>
    );
}

export default Map;