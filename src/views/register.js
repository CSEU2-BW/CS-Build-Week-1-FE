import { connect } from 'react-redux';
import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import SignIn from '../components/Login';
import SignUp from '../components/Register';
import Background2 from '../assests/opened.jpg';
import { ToastContainer } from 'react-toastify';

const Container = styled.div`
  width: 100%;
  height: 100%;
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
  .error{
    color:red;
    width:100%;
    position:relative;
    p{
        display:inline;
        text-align:right;
    }
  }
  a{
    color:white;
    text-decoration:none;
    font-size:1rem;
    padding:1rem;
}
`;

const ActionDiv = styled.div`
  margin-left: 40%;
  margin-top: 10%;
  width: 30%;
  height: 100%;
  @media(max-width:500px){
    width:80%;
    margin-left:0%;
  }
`;

const Registered = props => {
  const [registering, setRegistering] = useState(false);
  const setModal = () => setRegistering(!registering);
  return (
    <Container>
      <h1>Adventure House</h1>
      <ActionDiv>
      <ToastContainer autoClose={3000} position="top-right" className="error" />
        {!props.isLoggedIn && !registering && <SignIn started={setModal} />}
        {!props.isLoggedIn && registering && <SignUp started={setModal} />}
      </ActionDiv>
      <Link to='/'> Go to Home</Link>
    </Container>
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });
export default connect(
  mapStateToProps,
  {},
)(Registered);
