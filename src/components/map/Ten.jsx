import styled from 'styled-components';
import React from 'react';
import Room from './Room';

function Ten(props) {
  //   console.log(props.data.rooms);
  return (
    <RoomWrapper>
      {props.rooms.map(room => (
        <Room room={room.title} key={room.id} n={room.n_to} />
      ))}
    </RoomWrapper>
  );
}

export default Ten;

const RoomWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
