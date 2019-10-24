
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import styled from "styled-components";
import {ToastContainer} from 'react-toastify';
import * as actions from "./actions/index";
import RestrictedRoute from "./HOCs/RestrictedRoute";
import Logout from "./components/Logout";
import Map from "./components/map/Map";
import Home from './views/home';
import Play from "./views/Play";
import Register from './views/register';


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
    <div>
      {props.isLoggedIn && <Logout {...props} />}
      <ToastContainer />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Register} />
      <Route path="/play" component={Play} />
    </div>
  );
}


function mapStateToProps(state) {
  return {
    loading: state.loading,
    isLoggedIn: state.isLoggedIn,
    token: state.token,
    error: state.error,
    data: state.data,
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
