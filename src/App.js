import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import * as actions from "./actions/index";
import RestrictedRoute from "./HOCs/RestrictedRoute";
import Logout from "./components/Logout";
import Map from "./components/map/Map";
import Home from "./views/home";
import Play from "./views/Play";
import Register from "./views/register";

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
const WithHoc = RestrictedRoute(Play);

function App(props) {
  // const getStarted = () => {
  //   setCurrent({
  //     ...current,
  //     started: true,
  //   });
  // };
  // const setModal = () => {
  //   setCurrent({
  //     ...current,
  //     registered: !current.registered,
  //   });
  // };
  // const fetch_rooms = () => {
  //   props.fetchingRooms();
  // };
  return (
    <Container>
      {props.isLoggedIn && <Logout {...props} />}
      <Route exact path="/" component={Home} />
      <Route
        path="/login"
        render={() => {
          if (localStorage.getItem("token")) {
            return <Redirect to="/play" />;
          }
          return <Register />;
        }}
      />
      <Route path="/play" component={WithHoc} />
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
