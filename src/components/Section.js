import React from 'react';
import styled from 'styled-components';

export default function Section(props) {
  const { children } = props;

  return <StyledIntro>{children}</StyledIntro>;
}

const StyledIntro = styled.section`
  & > div {
    box-sizing: border-box;

    &:first-child {
      width: 50%;
      height: 100vh;
      position: sticky;
      top: 0;
      bottom: 0;
      left: 0;
      float: left;
    }

    &:last-child {
      width: 50%;
      height: auto;
      margin-left: 50%;
    }
  }
`;
