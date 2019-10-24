import styled from 'styled-components';
import React from 'react';

function Room(props) {
  return <StyledRoom n_to={props.room.n_to} s_to={props.room.s_to} e_to={props.room.e_to} w_to={props.room.w_to}>{props.room.title}</StyledRoom>;
}

export default Room;

const StyledRoom = styled.div`
  background-color: yellowgreen;
  width: 100px;
  height: 100px;
  border-top: 4px solid yellowgreen;
  border-right: 4px solid yellowgreen;
  border-left: 4px solid yellowgreen;
  border-bottom: 4px solid yellowgreen;

  border-top: ${props => (props.n_to > 0 ? '4px solid yellowgreen' : '4px solid black')};
  border-bottom: ${props => (props.s_to > 0 ? '4px solid yellowgreen' : '4px solid black')};
  border-right: ${props => (props.e_to > 0 ? '4px solid yellowgreen' : '4px solid black')};
  border-left: ${props => (props.w_to > 0 ? '4px solid yellowgreen' : '4px solid black')};
`;
