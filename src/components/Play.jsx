import React from 'react';
// import styled from 'styled-components';

export default function Play(props) {
    // console.log(props.token);
    const onPlay = () => {
        props.initialize(props.token);
    };
    // console.log(data);
	return (
		<div>
            <p>Play Area</p>
            <button onClick={onPlay}>Init</button>
        </div>
        
	);
}
