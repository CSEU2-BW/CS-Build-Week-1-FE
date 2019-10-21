import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';
import Login from './components/Login'
import Register from './components/Register'

function App(props) {
  return (
    <div>
        <Register {...props} />
        <Login {...props} />
    </div>
  );
}

function mapStateToProps(state) {
	return {
        registeringUser: state.registeringUser,
        loggingInUser: state.loggingInUser,
        key: state.key,
        error: state.error,
	};
}

export default connect(
    mapStateToProps,
    actions
)(App);
