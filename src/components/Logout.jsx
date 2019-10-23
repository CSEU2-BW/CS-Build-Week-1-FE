import React from 'react';
// import styled from 'styled-components';

export default function Logout(props) {
    const onLogOut = () => {
        props.logOut();
    };
    
	return (
		<button type="submit" onClick={onLogOut} >Log Out</button>
	);
}
