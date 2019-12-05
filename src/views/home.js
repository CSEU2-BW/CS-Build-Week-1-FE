import React, { useState } from 'react';
import { Link} from "react-router-dom";
import Typed from "react-typed";
import styled from "styled-components";
import Background1 from "../assests/house.jpg";
import "../animate.css";
import {Animated} from "react-animated-css";
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
  justify-content:center;
  h1 {
    color: white;
    font-size: 3em;
    text-align: center;
  }
  span{
    height:30vh;
    color:white;
    text-align:center;
    font-size:1.5rem;
    @media(max-width:500px){
      font-size:1.2rem;
    }
  }
  a{

  margin-top: 10vh;
  outline: none;
  background-color: inherit;
  color: white;
  font-size: 1.5em;
  height: 5em;
  width: 10em;
  font-weight: bold;
  border: none;
  text-decoration:none;
  }
`;

const word = localStorage.getItem('token')?'Continue Game' : 'Get Started';
const Home = () => {
  const [current, setCurrent] = useState(false);
  return (
    <Container>
      <h1> Adventure House</h1>
      <Typed
        strings={[
          '<p>There is a lot of adventures awaiting you .....</p>',
          '<p>The only thing holding you back is your fears ....</p>',
          '<p>Get rid of your fear and get an adventure!</p>'
        ]}
        typespeed={100}
        fadeOut
        showCursor={false}
        onComplete={() => setCurrent({ current: true })}
      />
      {current && <Animated animationIn="flash"><Link to="/login"> {word} </Link> </Animated>}
    </Container>
  );
};

export default Home;
