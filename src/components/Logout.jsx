import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/index';
// import styled from 'styled-components';

const Logout = props => {
  const onLogOut = () => {
    localStorage.clear('token');
    props.logOut();
  };

  return (
    <button type="submit" onClick={onLogOut}>
      Log Out
    </button>
  );
};

export default connect(
  null,
  { logOut },
)(Logout);
