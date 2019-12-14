import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { navigateRooms } from "../actions";

const Navigation = props => (
  <Container>
    <Button type="button" onClick={() => props.navigateRooms("n")}>
      North
    </Button>
    <Button type="button" onClick={() => props.navigateRooms("s")}>
      South
    </Button>
    <Button type="button" onClick={() => props.navigateRooms("e")}>
      East
    </Button>
    <Button type="button" onClick={() => props.navigateRooms("w")}>
      West
    </Button>
  </Container>
);

const Container = styled.div`
  display: flex;
  height:60%;   
  width:100%;
align-items:center;
  justify-content: center;
  flex-direction:column;
  maegin: 0 auto;
  @media(max-width:500px){
   flex-direction:row;
   width:100%;
   height:100%;
  }
`;
const Button = styled.div`
  background: rgb(71, 57, 43);
  color: white;
  display:flex;
  margin:2%
  height:50%;
  justify-content:center;
  align-items:center;
  width:50%;
  border-radius: 20%;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px wheat;
  }
  @media(max-width:500px){
  }
`;
export default connect(
  null,
  { navigateRooms }
)(Navigation);
