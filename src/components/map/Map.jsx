import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Rooms from './Rooms';

import { fetchingRooms } from '../../actions';

function Map(props) {
  return (
    <MapContainer>
      <Rooms {...props} />
    </MapContainer>
  );
}

export default connect(null, { fetchingRooms })(Map);

const MapContainer = styled.div`
display:flex;
width:100%;
margin:0;
padding:0;
height:99%;
`;
