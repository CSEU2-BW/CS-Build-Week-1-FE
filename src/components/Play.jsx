import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Navigation from "./Navigation";
import { initialize } from "../actions";
import Map from "./map/Map"

const Play = props => {
  useEffect(() => {
    props.initialize(props.token);
    props.fetchingRooms();
  }, []);

  return (
    <Container>
      <p className="title">MUD GAME</p>
      <Game>
        <MapWrapper>
          {props.data && <Map exact path="/map" {...props.data} />}
        </MapWrapper>
        <Room>
          <p>
            Hello, &nbsp;
            <strong>{props.currentRoom && props.currentRoom.name}</strong>
          </p>
          <p>
            <strong>Location:</strong>
            &nbsp;
            {props.currentRoom && props.currentRoom.title}
          </p>
          <p>
            <strong>Description:</strong>
            &nbsp;
            {props.currentRoom && props.currentRoom.description}
          </p>
          <p>
            <strong>Error:</strong>
            &nbsp;
            {props.currentRoom && props.currentRoom.error_msg}
          </p>
          <br />
          <p>
            <strong>
              List of players in
              {props.currentRoom && props.currentRoom.title}
            </strong>
          </p>
          <ul className='players'>
            {props.currentRoom && props.currentRoom.players.length
              ? props.currentRoom.players.map(player => <li>{player}</li>)
              : "No players in this room"}
          </ul>
        </Room>
        <Nav>
          <div className="Navigation">
            <Navigation />
          </div>
        </Nav>
      </Game>
    </Container>
  );
};

const mapStateToProps = state => ({
  currentRoom: state.currentRoom,
  token: state.token
});

export default connect(
  mapStateToProps,
  { initialize }
)(Play);

const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  .title{
    font-size: 3.1rem;
    font-family: monospace;
    text-align: center; 
    color: darkgreen
    margin: 0;
}
`;

const Game = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px darkgreen solid;
`;

const MapWrapper = styled.div`
  width: 75%;
  height: 75vh;
  box-sizing: border-box;
`;

const Nav = styled.div`
  width: 100%;
  height: 15vh;
  border-top: 2px darkgreen solid;
  background: gray;

  .Navigation {
    width: 75%;
  }
`;

const Room = styled.div`
  width: 25%;
  background: rgb(49, 56, 49);
  color: white;
  padding: 1rem;
  box-sizing: border-box;
  height: 75vh;
  text-transform: capitalize;
  font-size: 1.4rem;
  font-family: fantasy;

  .players{
    overflow-y: scroll;
  }
`;
