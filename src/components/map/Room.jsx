import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
function Room(props) {
  return (
    <StyledRoom
    n_to={props.room.n_to}
    s_to={props.room.s_to}
    e_to={props.room.e_to}
    w_to={props.room.w_to}
    crt={props.currentRoom && props.currentRoom.title}
    title={props.room.title}
  >
    {window.screen.width < 800 ? props.room.id : props.room.title}
  </StyledRoom>
  );
}


const mapStateToProps = state => ({
  currentRoom: state.currentRoom,
});

export default connect(
  mapStateToProps,
)(Room);

const StyledRoom = styled.div`
  width: 9.2%;
  height: 100%;
  margin:0;
  padding:0;
  text-align: center;
  font-family: cursive;
  background-color: ${props => (props.crt === props.title ? 'green' : 'wheat')};
  color: ${props => (props.crt === props.title ? 'white' : 'black')};
  border-top: ${props => (props.n_to > 0 ? '4px solid wheat' : '4px solid grey')};
  border-bottom: ${props => (props.s_to > 0 ? '4px solid wheat' : '4px solid grey')};
  border-right: ${props => (props.e_to > 0 ? '4px solid wheat' : '4px solid grey')};
  border-left: ${props => (props.w_to > 0 ? '4px solid wheat' : '4px solid grey')};
`;
