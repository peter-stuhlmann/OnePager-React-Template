import React from 'react';

import StyledSection from './StyledSection';
import SectionImage from './SectionImage';
import Navigation from './Navigation';
import PortfolioImage from './PortfolioImage';

export default function Portfolio() {
  return (
    <StyledSection id="work">
      <div style={{ backgroundColor: '#fff', padding: 0 }}>
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
            src="https://image-placeholder.vercel.app/?w=250&h=120&text=Work"
            alt="Placeholder"
          />
          <Navigation color="#000" underlineColor="rgb(247, 72, 78)" />
        </div>
      </div>
      <div style={{ padding: 0 }}>
        <PortfolioImage
          src="https://image-placeholder.vercel.app/?w=250&h=120&text=%20"
          alt="Placeholder"
          title="Lorem ipsum"
          description="Diam nonumy eirmod tempor invidunt"
        />
        <PortfolioImage
          src="https://image-placeholder.vercel.app/?w=250&h=120&text=%20&background=gray"
          alt="Placeholder"
          title="Lorem ipsum"
          description="Diam nonumy eirmod tempor invidunt"
        />
        <PortfolioImage
          src="https://image-placeholder.vercel.app/?w=250&h=120&text=%20"
          alt="Placeholder"
          title="Lorem ipsum"
          description="Diam nonumy eirmod tempor invidunt"
        />
      </div>
    </StyledSection>
  );
}
