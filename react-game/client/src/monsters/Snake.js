import React from 'react';

const Snake = (props) => {
    return (
      <div className={`tile snake ${props.direction}`}>
        &nbsp;
      </div>
    );
}

export default Snake;