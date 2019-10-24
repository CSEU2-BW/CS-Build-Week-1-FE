import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import * as actions from './actions/index';
import Login from './components/Login';
import RestrictedRoute from './HOCs/RestrictedRoute';
import Register from './components/Register';
import Play from './components/Play';
import Logout from './components/Logout';
import Map from './components/map/Map';

function App(props) {
  return (
    <div>
      {/* <div>
        {!props.isLoggedIn && <Register {...props} />}
        {!props.isLoggedIn && <Login {...props} />}
      </div> */}

      <Map exact path="/map" component={Map} />

      {/* <div>
        {props.isLoggedIn && <Logout {...props} />}
        {props.isLoggedIn && props.token && <Play {...props} />}
      </div> */}
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
  actions,
)(App);
