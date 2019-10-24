import React, { useEffect } from "react";
import Rooms from './Rooms';
import { connect } from "react-redux";
import { fetchingRooms } from "../../actions"

function Map(props) {
//   useEffect(() => {
//     props.fetchingRooms();
//     }, []);
  return (
    <div className="map-container" style={{ backgroundColor: 'yellowgreen' }}>
      <Rooms {...props} />


    </div>
  );
}

export default connect(null, { fetchingRooms })(Map);