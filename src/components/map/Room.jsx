import styled from 'styled-components';
import React, { Component } from 'react';

export class Room extends Component {
  render() {
    return <StyledRoom>{this.props.room}</StyledRoom>
  }
}

export default Room;


const StyledRoom = styled.div`
  background-color: yellowgreen;
  width: 100px;
  height: 100px;
  border-top: 4px solid black;
  border-right: 4px solid black;
  border-left: 4px solid black;
  border-bottom: 4px solid black;
`;
