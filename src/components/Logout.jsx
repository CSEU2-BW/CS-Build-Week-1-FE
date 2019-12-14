import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/index';
import styled from 'styled-components';

const Logout = props => {
  const onLogOut = () => {
    localStorage.clear('token');
    props.logOut();
  };

  return (
    <Button type="submit" onClick={onLogOut}>
      Log Out
    </Button>
  );
};


export default connect(
  null,
  { logOut },
)(Logout);

const Button = styled.button`
  font-size:1rem;
  height:60%;
  color:white;
  background-color:grey;
`;