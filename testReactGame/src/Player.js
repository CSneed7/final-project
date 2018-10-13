import React from 'react';

const Player = (props) => {
    return (
      <div className={`tile player ${props.direction}`}>
        &nbsp;
      </div>
    );
}

export default Player;