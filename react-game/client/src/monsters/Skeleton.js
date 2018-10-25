import React from 'react'

const Skeleton = (props) => {
    return (
      <div className={`tile skeleton ${props.direction}`}>
        &nbsp;
      </div>
    );
  }

  export default Skeleton;