import React from 'react';
import { connect } from 'react-redux';

import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className="App">
        <Register />
        <Login />
    </div>
  );
}

function mapStateToProps(state) {
	return {
		token: state.token,
	};
}

export default connect(
	mapStateToProps
)(App);
