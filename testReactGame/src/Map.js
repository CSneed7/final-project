import React from 'react';
import './Map.css';

const Map = (props) => {
    
    return (
      <div className="mapWrapper" style={{ width: `${props.tiles[0].length * 80}px`, height: `${props.tiles.length * 80}px` }}>
        <div className="map">
          {props.tiles.map(row => {
              return <div className="row">{ row.map(tile => <div className="tile">{ tile.component }</div>) }</div>
          })}
        </div>
      </div>
    );
}

export default Map;