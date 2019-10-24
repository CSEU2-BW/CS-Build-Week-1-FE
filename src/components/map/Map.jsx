import React, { Component } from 'react';
import Rooms from './Rooms';

class Map extends Component {
  render() {
    return (
      <div className="map-container">
        <Rooms />
      </div>
    );
  }
}

export default Map;
