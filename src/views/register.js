import { connect } from 'react-redux';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignIn from '../components/Login';
import SignUp from '../components/Register';
import Background2 from '../assests/opened.jpg';

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
    font-size: 3rem;
    text-align: center;
    @media(max-height:400px){
      font-size:2rem;
    }
    @media(max-width:500px){
      font-size:2.5rem;
    }
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
    @media(max-height:400px){
      width:40%;
      margin-top:65%;
    }
}
`;

const ActionDiv = styled.div`
  margin-left: 30%;
  margin-top: 10%;
  display:flex;
  align-items:center;
  flex-direction:column;
  width:60%;
  height: 100%;
  @media(max-width:500px){
    width:80%;
    flex-direction:column;
    margin-left:0%;
  }
  @media(max-height:400px){
    height:90%;
    width:58%;
    flex-direction:row-reverse;
    margin-top:0%;
    h2{
      font-size:1rem;
    }
    clip-path:none;
  }
`;
const Form = styled.div`
  width:55%;
  height:100%;
  @media(max-width:500px){
    width:100%;
  }
@media(max-height:400px){
  width:100%;
}
`;

const Registered = props => {
  const [registering, setRegistering] = useState(false);
  const setModal = () => setRegistering(!registering);
  return (
    <Container>
      <h1>Adventure House</h1>
      <ActionDiv>
      <Form>
        {!props.isLoggedIn && !registering && <SignIn started={setModal} />}
        {!props.isLoggedIn && registering && <SignUp started={setModal} />}
      </Form>
      <Link to="/"> Go to Home</Link>
        </ActionDiv>
    </Container>
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });
export default connect(
  mapStateToProps,
  {},
)(Registered);
