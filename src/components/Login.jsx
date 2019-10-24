import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logInUser } from '../actions/index';

export const Login = (props) => {
  const nameRef = React.createRef();
  const passRef = React.createRef();

  const onLogIn = () => {
    const existingUser = {
      username: nameRef.current.value,
      password: passRef.current.value,
    };
    props.logInUser(existingUser);
  };

  // console.log(props.key);

  return (
    <StyledContainer>
      <h2>Welcome To The House! Login</h2>
      <StyledInput type="text" placeholder="username" ref={nameRef} />

      <StyledInput type="password" placeholder="password" ref={passRef} />

      <StyledButton type="submit" onClick={onLogIn}>
        Log In
      </StyledButton>
      <p>
New to Adventure House?
        <OtherAction onClick={() => props.started()}>Register</OtherAction>
      </p>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:85%;
  background:#e2e2e2;
  opacity:0.8;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  color: rgb(3, 84, 16);
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  width:80%;
  margin: 0.5rem;
  border:1px solid green;
  background:none;
  padding:0.5rem;
  border-radius:5px;
  outline:none;
  &::placeholder{
    color:green;
    font-size:1rem;

  }
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  margin: 0.5rem;
  outline:none;
  background-color:green;
  font-size:1rem;
  border-radius:5px;
  width:5rem;
  height:3rem;
  color:white;
`;
const OtherAction = styled.button`
  width:5rem;
  height:2rem;
  border:none;
  font-size:1rem;
  outline:none;
  background-color:inherit;
  color:green;
  &:hover{
    background-color:green;
    color:white;
    border-radius:5px;
  }
`;


export default connect(null, { logInUser })(Login);
