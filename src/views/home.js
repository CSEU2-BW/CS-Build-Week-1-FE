import React, { useState } from 'react';
import { Link} from "react-router-dom";
import Typed from "react-typed";
import styled from "styled-components";
import Background1 from "../assests/house.jpg";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Background1});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: white;
    font-size: 3em;
    text-align: center;
  }
`;

const Button = styled.button`
  margin-top: 50vh;
  outline: none;
  background-color: inherit;
  color: white;
  font-size: 1.5em;
  height: 5em;
  width: 10em;
  font-weight: bold;
  border: none;
`;

const Home = () => {
  const [current, setCurrent] = useState(false);
  return (
    <Container>
      <h1> Adventure House</h1>
      <Typed
        strings={[
          '<p>There is a lot of adventures awaiting you in the house</p>',
        ]}
        typespeed={100}
        fadeOut
        showCursor={false}
        onComplete={() => setCurrent({ current: true })}
      />
      {current && <Link to="/login"> Get Started</Link>}
    </Container>
  );
};

export default Home;
