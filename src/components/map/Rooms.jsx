import styled from 'styled-components';
import React from 'react';
import Ten from './Ten';

function Rooms(props) {
  const tenrooms0 = props.data.rooms.slice(0, 10);
  const tenrooms1 = props.data.rooms.slice(10, 20);
  const tenrooms2 = props.data.rooms.slice(20, 30);
  const tenrooms3 = props.data.rooms.slice(30, 40);
  const tenrooms4 = props.data.rooms.slice(40, 50);
  const tenrooms5 = props.data.rooms.slice(50, 60);
  const tenrooms6 = props.data.rooms.slice(60, 70);
  const tenrooms7 = props.data.rooms.slice(70, 80);
  const tenrooms8 = props.data.rooms.slice(80, 90);
  const tenrooms9 = props.data.rooms.slice(90, 100);
  return (
    <Wrapper>
      <Ten rooms={tenrooms0} />
      <Ten rooms={tenrooms1} />
      <Ten rooms={tenrooms2} />
      <Ten rooms={tenrooms3} />
      <Ten rooms={tenrooms4} />
      <Ten rooms={tenrooms5} />
      <Ten rooms={tenrooms6} />
      <Ten rooms={tenrooms7} />
      <Ten rooms={tenrooms8} />
      <Ten rooms={tenrooms9} />
    </Wrapper>
  );
}

export default Rooms;

const Wrapper = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
`;
