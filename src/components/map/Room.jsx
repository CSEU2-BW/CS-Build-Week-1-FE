import styled from 'styled-components';
import React, { Component } from 'react';

export class Room extends Component {
  render() {
    return <StyledRoom />
  }
}

export default Room;


const StyledRoom = styled.div`
  background-color: yellowgreen;
  width: 50px;
  height: 50px;
  border-top: 4px solid black;
  border-right: 4px solid black;
  border-left: 4px solid black;
  border-bottom: 4px solid black;
`;
