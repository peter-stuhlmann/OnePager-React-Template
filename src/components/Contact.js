import React, { useState } from 'react';
import styled from 'styled-components';

import StyledSection from './StyledSection';
import SectionImage from './SectionImage';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';
import Imprint from './Imprint';

export default function Contact() {
  const [imprintOpen, setImprintOpen] = useState(false);

  return (
    <StyledSection id="contact">
      <div style={{ backgroundColor: '#292929' }}>
        <div>
          <SectionImage
            src="https://image-placeholder.vercel.app/?w=250&h=120&text=Contact"
            alt="Placeholder"
          />
          <Navigation color="rgb(247, 72, 78)" underlineColor="#fff" />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p>
            <b>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt
            </b>
          </p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          <h3>John Doe</h3>
          <p>
            Lorem ipsum dolor sit amet
            <br />
            <a href="mailto:example@example.com">example@example.com</a>
          </p>
          <SocialMedia />
        </div>
        <FooterLink onClick={() => setImprintOpen(true)}>Imprint</FooterLink>
        {imprintOpen && <Imprint setImprintOpen={setImprintOpen} />}
      </div>
    </StyledSection>
  );
}

const FooterLink = styled.span`
  text-decoration: none;
  color: #000 !important;
  font-weight: bold;
  padding: 24px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: rgb(247, 72, 78) !important;
  }
`;
