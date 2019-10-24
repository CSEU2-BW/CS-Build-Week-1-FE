import styled from 'styled-components';
import React from 'react';
import { connect } from "react-redux";

function Room(props) {
  return (
    <StyledRoom
      n_to={props.room.n_to}
      s_to={props.room.s_to}
      e_to={props.room.e_to}
      w_to={props.room.w_to}
      crt={props.currentRoom.title}
      title={props.room.title}
    >
      {props.room.title}
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
  width: 70px;
  height: 40px;
  border-top: 4px solid yellowgreen;
  border-right: 4px solid yellowgreen;
  border-left: 4px solid yellowgreen;
  border-bottom: 4px solid yellowgreen;

  background-color: ${props => (props.crt === props.title ? "blue" : "yellowgreen")};
  border-top: ${props => (props.n_to > 0 ? "4px solid yellowgreen" : "4px solid black")};
  border-bottom: ${props => (props.s_to > 0 ? "4px solid yellowgreen" : "4px solid black")};
  border-right: ${props => (props.e_to > 0 ? "4px solid yellowgreen" : "4px solid black")};
  border-left: ${props => (props.w_to > 0 ? "4px solid yellowgreen" : "4px solid black")};
`;
