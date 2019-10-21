import React from 'react';
import styled from 'styled-components';

export default function Register() {

	return (
		<StyledContainer>
			<StyledInput type="text" placeholder="username" />

			<StyledInput type="password" placeholder="password" />

			<StyledButton type="submit" >
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
`;

const StyledInput = styled.input`
	font-size: 1.5rem;
	margin: 0.5rem;
`;

const StyledButton = styled.button`
	font-size: 1.5rem;
	margin: 0.5rem;
`;
