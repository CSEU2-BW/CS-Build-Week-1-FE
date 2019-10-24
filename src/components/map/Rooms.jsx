import styled from 'styled-components';
import React, { Component } from 'react';
import Room from './Room';

function Rooms(props) {
  console.log(props.data.rooms);
  for (let i = 0; i < 10; i++) {
    let increment = i;
    return (
      <RoomWrapper>
        <div>
          {props.data.rooms.map((room, index) => {
            if (index >= increment * 10 && index < (increment + 1) * 10) {
              return (
                <Room room={room.title} key={room.id}>
                  {room.title}
                </Room>
              );
            }
          })}
        </div>
      </RoomWrapper>
    );
  }
}

export default Rooms;

const RoomWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
