import React from 'react';
import styled from 'styled-components';

import StyledSection from './StyledSection';
import SectionImage from './SectionImage';
import Navigation from './Navigation';

export default function About() {
  return (
    <StyledSection id="about">
      <div style={{ backgroundColor: '#f7484e', padding: 0 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <SectionImage
            src="https://image-placeholder.vercel.app/?w=250&h=120&text=About"
            alt="Placeholder"
          />
          <Navigation color="#000" underlineColor="#fff" />
        </div>
      </div>
      <MiniImage
        src="https://image-placeholder.vercel.app/?w=135&h=135"
        alt="Placeholder"
      />
      <div>
        <p>
          <b>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </b>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <h3>Consetetur sadipscing elitr</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <p>
          <b>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </b>
        </p>
        <h3>At vero eos et accusam et justo duo</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
        </p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr:</p>
        <p style={{ marginTop: '-30px' }}>
          <ol>
            <li>
              <b>ACCUSAM</b> et justo duo
            </li>
            <li>
              <b>DOLORE</b> magna aliquyam
            </li>
            <li>
              <b>EIRMOD TEMPOR</b> invidunt ut labore
              <ul>
                <li>
                  <b>Lorem ipsum</b> dolor sit amet
                </li>
                <li>
                  <b>consetetur</b> sadipscing elitr
                </li>
                <li>
                  <b>sed diam</b> nonumy eirmod tempor
                </li>
                <li>
                  <b>invidunt</b> ut labore et dolore magna
                </li>
                <li>
                  <b>aliquyam erat</b> sed diam voluptua
                </li>
                <li>
                  <b>At vero</b> eos et accusam et justo
                </li>
              </ul>
            </li>
          </ol>
        </p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
        <p>
          <b>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </b>
        </p>
      </div>
    </StyledSection>
  );
}

const MiniImage = styled.img`
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translate(-50%, -50%);
  max-width: 135px;

  @media (max-width: 1200px) {
    max-width: 100px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
