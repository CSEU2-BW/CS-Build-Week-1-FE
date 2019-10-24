import React, { useState } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import * as actions from "./actions/index";
import Login from "./components/Login";
import RestrictedRoute from "./HOCs/RestrictedRoute";
import Register from "./components/Register";
import Play from "./components/Play";
import Logout from "./components/Logout";
import Map from "./components/map/Map";
import styled from "styled-components";
import Background1 from "./assests/house.gif";
import Background2 from "./assests/inside.jpg";
import Typed from "react-typed";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${props =>
    props.started
      ? `background: url(${Background2})`
      : `background: url(${Background1})`};
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: white;
    font-size: 3em;
    text-align: center;
  }
`;
const Button = styled.button`
  margin-top: 50vh;
  outline: none;
  background-color: inherit;
  color: white;
  font-size: 1.5em;
  height: 5em;
  width: 10em;
  font-weight: bold;
  border: none;
`;
const ActionDiv = styled.div`
  margin-left: 40%;
  margin-top: 10%;
  width: 30%;
  height: 100%;
`;

function App(props) {
  const [current, setCurrent] = useState({
    started: false,
    show: false,
    registered: false,
  });
  const getStarted = () => {
    setCurrent({
      ...current,
      started: true,
    });
  };
  const setModal = () => {
    setCurrent({
      ...current,
      registered: !current.registered,
    });
  };
  // const fetch_rooms = () => {
  //   props.fetchingRooms();
  // };
  return (
    <Container started={current.started}>
      <div>
        <h1>Adventure House</h1>
        {props.isLoggedIn && <Logout {...props} />}
      </div>

      {!current.started && (
        <Typed
          strings={[
            "<p>There is a lot of adventures awaiting you in the house</p>"
          ]}
          typespeed={100}
          fadeOut
          showCursor={false}
          onComplete={() => setCurrent({ ...current, show: true })}
        />
      )}
      {!current.started && current.show && (
        <Button onClick={getStarted}>Get Started</Button>
      )}
      {current.started && (
        <ActionDiv>
          {!props.isLoggedIn && current.registered && (
            <Register started={setModal} />
          )}
          {!props.isLoggedIn && !current.registered && (
            <Login started={setModal} />
          )}
        </ActionDiv>
     
      )}
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    isLoggedIn: state.isLoggedIn,
    token: state.token,
    error: state.error,
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
