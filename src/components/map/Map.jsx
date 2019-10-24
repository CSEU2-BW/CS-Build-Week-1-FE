
import React from 'react';
import Rooms from './Rooms';

function Map(props) {
  console.log(props)
  return (
    <div className="map-container" style={{ backgroundColor: 'yellowgreen' }}>
      <Rooms {...props} />


    </div>
  );
}

export default Map;
