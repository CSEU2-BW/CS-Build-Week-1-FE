import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { registerUser } from "../actions/index";
import {toast} from 'react-toastify'

export const Register = props => {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const pass1Ref = React.createRef();
  const pass2Ref = React.createRef();

  const onRegister = e => {
    e.preventDefault();
    const newUser = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password1: pass1Ref.current.value,
      password2: pass2Ref.current.value,
    };
    props.registerUser(newUser);
  };

  return (
    <StyledContainer onSubmit={onRegister}>
      <h2>Explore The House! Register </h2>
      <StyledInput type="text" placeholder="username" ref={nameRef} required />
      <StyledInput type="email" placeholder="email" ref={emailRef} required />
      <StyledInput
        type="password"
        placeholder="password"
        ref={pass1Ref}
        required
      />
      <StyledInput
        type="password"
        placeholder="confirm password"
        ref={pass2Ref}
        required
      />
      {props.error && props.error.username && props.error.data.username.map((error, i) => toast(<p key={i}>{error}</p>))}
      {/* {props.error && props.error.email && props.error.email.map((error, i) => toast(<p key={i}>{error}</p>))}
      {props.error && props.error.password1.map((error, i) => toast(<p key={i}>{error}</p>))}
      {props.error && props.error.password2.map((error, i) => toast(<p key={i}>{error}</p>))} */}
      <StyledSubmit type="submit" value="Register" />
      <p>
        Already in the House?
        <OtherAction onClick={() => props.started()}>Login</OtherAction>
      </p>
    </StyledContainer>
  );
};

const StyledContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  background: #e2e2e2;
  opacity: 0.8;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
  color: rgb(3, 84, 16);
  @media(max-width:500px){
    height:100%;
    h2{
      font-size:1rem;
    }
    clip-path:none;
  }
  @media(max-height:400px){
    height:95%;
    h2{
      font-size:1rem;
    }
    clip-path:none;
  }

  `;

const StyledInput = styled.input`
  font-size: 1rem;
  width: 80%;
  height:6.5%;
  margin: 0.3rem;
  border: 1px solid green;
  background: none;
  padding-left:0.8rem;
  border-radius: 5px;
  &::placeholder {
    color: green;
    font-size: 1rem;
  }
  @media(max-width:500px){
    height:10%;
  }
  @media(max-height:400px){
    margin:0.1rem;
    height:10%;
  }
`;

const StyledSubmit = styled.input`
  font-size: 1.5rem;
  margin: 0.3rem 0.5rem;
  margin-bottom: 0.02rem;
  outline: none;
  border:none;
  background-color: green;
  font-size: 1rem;
  border-radius: 5px;
  width: 5rem;
  height: 3rem;
  color: white;
`;
const OtherAction = styled.button`
  width: 5rem;
  height: 2rem;
  border: none;
  font-size: 1rem;
  outline: none;
  background-color: inherit;
  color: green;
  &:hover {
    background-color: green;
    color: white;
    border-radius: 5px;
  }
`;


const mapStateToProps = ({ error }) => ({ error });

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
