import { connect } from 'react-redux';
import React, { useState } from 'react';
import styled from 'styled-components';
import SignIn from '../components/Login';
import SignUp from '../components/Register';
import Background2 from '../assests/inside.jpg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Background2});
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

const ActionDiv = styled.div`
  margin-left: 40%;
  margin-top: 10%;
  width: 30%;
  height: 100%;
`;

const Registered = props => {
  const [registering, setRegistering] = useState(false);
  const setModal = () => setRegistering(!registering);
  return (
    <Container>
      <h1>Adventure House</h1>
      <ActionDiv>
        {!props.isLoggedIn && !registering && <SignIn started={setModal} />}
        {!props.isLoggedIn && registering && <SignUp started={setModal} />}
      </ActionDiv>
    </Container>
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });
export default connect(
  mapStateToProps,
  {},
)(Registered);
