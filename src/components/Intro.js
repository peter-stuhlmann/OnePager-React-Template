import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';

export default function Intro() {
  return (
    <StyledIntro>
      <Title>Lorem ipsum dolor sit amet</Title>
      <Image
        src="https://image-placeholder.vercel.app/?w=450&h=450"
        alt="Placeholder"
      />
      <Navigation />
    </StyledIntro>
  );
}

const StyledIntro = styled.section`
  background-color: #292929;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #f7484e;
  font-size: 0.875em;
  margin: 0;
  text-transform: uppercase;
  padding: 36px 15px;
  font-weight: bold;
`;

const Image = styled.img`
  max-width: calc(100vw - 20px);
  max-height: calc(100vh - 180px);
`;
