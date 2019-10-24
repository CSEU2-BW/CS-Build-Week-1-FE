import React from 'react';
import styled from 'styled-components';

export default function Login(props) {
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
      <StyledInput type="text" placeholder="username" ref={nameRef} />

      <StyledInput type="password" placeholder="password" ref={passRef} />

      <StyledButton type="submit" onClick={onLogIn}>
        Log In
      </StyledButton>
      <p>New to Adventure House? <button>Register</button></p>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  width: 100%;
  height:50%;

  color: rgb(3, 84, 16);
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem;
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  margin: 0.5rem;
`;
