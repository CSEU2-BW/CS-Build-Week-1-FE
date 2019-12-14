import styled from 'styled-components';
import React from 'react';
import Room from './Room';

function Ten(props) {
  //   console.log(props.data.rooms);
  return (
    <RoomWrapper>
      {props.rooms.map(room => (
        <Room room={room} key={room.id} />
      ))}
    </RoomWrapper>
  );
}

export default Ten;

const RoomWrapper = styled.div`
  width: 100%;
  height:10%;
  display: flex;
  margin:0;
  padding:0;
`;
