import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions/index';
import Login from './components/Login'
import Register from './components/Register'
import Play from './components/Play'

function App(props) {
  return (
    <div>
        <div>
            {!props.isLoggedIn && (<Register {...props} />)}
            {!props.isLoggedIn && (<Login {...props} />)}
        </div>

        <div>
            {props.isLoggedIn && (<Play {...props} />)}
        </div>


    </div>
  );
}

function mapStateToProps(state) {
	return {
        registeringUser: state.registeringUser,
        loggingInUser: state.loggingInUser,
        isLoggedIn: state.isLoggedIn,
        key: state.key,
        error: state.error,
	};
}

export default connect(
    mapStateToProps,
    actions
)(App);
