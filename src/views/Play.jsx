import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { initialize, fetchingRooms } from "../actions";
import Map from "../components/map/Map"

const Play = props => {
  useEffect(() => {
    props.initialize(props.token);
    props.fetchingRooms();
  }, []);

  return (
    <Container>
      <h1 className="title">Adventure House</h1>
      {/* <p>Room {props.currentRoom && props.currentRoom.title}. See details -></p> */}
      <GameContainer>
        <Game>
          <MapWrapper>
          {props.data && <Map exact path="/map" {...props.data} />}
        </MapWrapper>
        <Nav>
            <Navigation />
        </Nav>
      </Game>
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
          <ul className="players">
            {props.currentRoom && props.currentRoom.players.length
              ? props.currentRoom.players.map(player => <li>{player}</li>)
              : 'No players in this room'}
          </ul>
        </Room>
      </GameContainer>
    </Container>
  );
};

const mapStateToProps = state => ({
  currentRoom: state.currentRoom,
  token: state.token,
  data: state.data,
});

export default connect(
  mapStateToProps,
  { initialize, fetchingRooms },
)(Play);

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .title{
    font-size: 3rem;
    font-family: monospace;
    text-align: center; 
    color: darkgreen;
    height:10%;
    margin: 0;
    @media(max-width:500px){
      font-size: 2rem;
    }
}
`;
const GameContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  @media(max-width:500px){
    flex-direction:column;
  }
`;
const Game = styled.div`
  display: flex;
  width:75%;
  height:100%;
  border: none;
  @media(max-width:500px){
    flex-direction:column;
    width:100%;
    heigth:100%;
  }
`;
const MapWrapper = styled.div`
  width: 80%;
  height: 100%;
  box-sizing: border-box;
  @media(max-width:500px){
    width:100%;
    height:100%;
  }
`;
const Nav = styled.div`
  width: 20%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  border:none;
  background: gray;
  @media(max-width:500px){
    justify-content:flex-start;
    width:100%;
    height:10%;
  }
`;


const Room = styled.div`
  width: 25%;
  display:flex;
  height:100%;
  background: rgb(49, 56, 49);
  color: white;
  padding: 1rem;
  box-sizing: border-box;
  height: 100%;
  text-transform: capitalize;
  font-size: 1.4rem;
  font-family: fantasy;
  @media(max-width:500px){
   display:none;
   width:100%;
   height:30%;

   flex-wrap:wrap;
   font-size:1rem;
   p{
     margin:0;
     padding;0;
   }

  }
`;
