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
  justify-content: center;
  maegin: 0 auto;
`;
const Button = styled.div`
  background: rgb(71, 57, 43);
  color: white;
  padding: 5px;
  margin: 2rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px wheat;
  }
`;
export default connect(
  null,
  { navigateRooms }
)(Navigation);
