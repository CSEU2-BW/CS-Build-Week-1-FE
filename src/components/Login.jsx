import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logInUser } from '../actions/index';

export const Login = (props) => {
  const nameRef = React.createRef();
  const passRef = React.createRef();

  const onLogIn = (e) => {
    e.preventDefault()
    const existingUser = {
      username: nameRef.current.value,
      password: passRef.current.value,
    };
    props.logInUser(existingUser);
    nameRef.current.value = '';
    passRef.current.value = '';
  };

  // console.log(props.key);

  return (
    <StyledContainer onSubmit={onLogIn}>
      <h2>Welcome To The House! Login</h2>
      <StyledInput type="text" placeholder="username" ref={nameRef} required/>

      <StyledInput type="password" placeholder="password" ref={passRef} required/>

      <StyledButton type="submit" value="Login" />

      <p>
New to the House?
        <OtherAction onClick={() => props.started()}>Register</OtherAction>
      </p>
    </StyledContainer>
  );
};

const StyledContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:90%;
  background:#e2e2e2;
  opacity:0.8;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  color: rgb(3, 84, 16);
  @media(max-width:500px){
    height:100%;
    h2{
      font-size:1rem;
    }
    clip-path:none;
  }
  @media(max-height:400px){
    height:95%;;
    h2{
      font-size:1rem;
    }
    clip-path:none;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  width:80%;
  height:10%;
  margin: 0.5rem;
  padding-left:0.8rem;
  border:1px solid green;
  background:none;
  border-radius:5px;
  outline:none;
  &::placeholder{
    color:green;
    font-size:1rem;

  }
`;

const StyledButton = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem;
  outline:none;
  border:none;
  background-color:green;
  font-size:1rem;
  border-radius:5px;
  width:5rem;
  height:3rem;
  color:white;
  @media(max-width:500px){
    height:2rem;
  
  }
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

const mapStateToProps = ({ error }) => ({ error });


export default connect(mapStateToProps, { logInUser })(Login);
