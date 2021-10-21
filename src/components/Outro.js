import React from 'react';
import styled from 'styled-components';

export default function Outro() {
  return (
    <StyledOutro>
      <Image
        src="https://image-placeholder.vercel.app/?w=450&h=450"
        alt="Placeholder"
      />
    </StyledOutro>
  );
}

const StyledOutro = styled.section`
  background-color: #292929;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: calc(100vw - 20px);
  max-height: calc(100vh - 180px);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
