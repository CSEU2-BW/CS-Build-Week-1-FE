import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { initialize, fetchingRooms } from '../actions';
import Map from '../components/map/Map';
import Logout from "../components/Logout";

const Play = props => {
  useEffect(() => {
    props.initialize(props.token);
    props.fetchingRooms();
  }, []);
const [roomDetails, showRoomDetails] = useState(false)
  return (
    <Container>
      <Header>
      <h1 className="title">Adventure House</h1>
      <Logout /> 
      </Header>
      <Par error={props.currentRoom && props.currentRoom.error_msg}> Room {props.currentRoom && props.currentRoom.title}.
      <button onClick ={()=> showRoomDetails(!roomDetails)}>{roomDetails ? 'Hide details' : 'Show details'} -> </button></Par>
      <GameContainer>
        <Game>
          <MapWrapper>
          {props.data && <Map exact path="/map" {...props.data} />}
        </MapWrapper>
        <Nav>
            <Navigation />
        </Nav>
      </Game>
      <Room show={roomDetails}>
          <p>
            Hello, &nbsp;
            <strong>{props.currentRoom && props.currentRoom.name}</strong>
          </p>
          <p>
            <strong>Room:</strong>
            &nbsp;
            {props.currentRoom && props.currentRoom.title}
          </p>
          <p>
            <strong>Description:</strong>
            &nbsp;
            {props.currentRoom && props.currentRoom.description}
          </p>
          {props.currentRoom && props.currentRoom.error_msg &&  <p>
            <strong>Error:</strong>
            &nbsp;
            {props.currentRoom.error_msg}
          </p>}
          <br />
          <p>
            <strong>
              List of players in {props.currentRoom && props.currentRoom.title}
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
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  .title{
    font-size: 3rem;
    font-family: monospace;
    text-align: center; 
    color: darkgreen;
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
const Par = styled.p`
  display:none;
  @media(max-width:500px){
    display:flex;
    justify-content:center;
    button{
      outline:none;
      ${props => (props.error ? `color:red` : `color:green`)};
      margin:0;
      border:0;
      background-color:inherit;
    }
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
  flex-direction:column;
  padding: 1rem;
  box-sizing: border-box;
  height: 100%;
  text-transform: capitalize;
  font-size: 1.4rem;
  font-family: fantasy;
  @media(max-height:400px){
    font-size:1rem;
    p{
      margin:0;
    }
  }
  @media(max-width:500px){
  ${props => (props.show ? `display:flex` : `display:none`)};
   width:100%;
  height:85%;
  position:fixed;
  top:15%;
   font-size:1rem;
   p{
     margin:0;
     padding;0;
   }

  }
`;
const Header = styled.div`
display:flex;
  width:100%;
  height:10%;
  h1{
    width:90%;
    @media(max-width:500px){
      width:76%;
    }
  }
  button{
    width:10%;
    @media(max-width:500px){
      width:24%;
    }
    @media(max-height:400px){
      width:24%;
    }
  }
`;
