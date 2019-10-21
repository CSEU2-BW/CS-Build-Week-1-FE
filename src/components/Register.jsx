import React from 'react';
import styled from 'styled-components';

export default function Register(props) {
	const nameRef = React.createRef();
	const emailRef = React.createRef();
	const pass1Ref = React.createRef();
	const pass2Ref = React.createRef();

	const onRegister = () => {
		const newUser = {
			username: nameRef.current.value,
			email: emailRef.current.value,
			password1: pass1Ref.current.value,
			password2: pass2Ref.current.value,
		};
        props.registerUser(newUser);
	};

	return (
		<StyledContainer>
			<StyledInput type="text" placeholder="username" ref={nameRef} />
			<StyledInput type="text" placeholder="email" ref={emailRef} />
			<StyledInput type="password" placeholder="password" ref={pass1Ref} />
			<StyledInput type="password" placeholder="password" ref={pass2Ref} />

			<StyledButton type="submit" onClick={onRegister}>
				Register
			</StyledButton>
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: auto;
	background-color: rgb(255, 183, 82, 0.9);
    color: rgb(3, 84, 16);
    margin-bottom: 2rem;
`;

const StyledInput = styled.input`
	font-size: 1.5rem;
	margin: 0.5rem;
`;

const StyledButton = styled.button`
	font-size: 1.5rem;
	margin: 0.5rem;
`;
