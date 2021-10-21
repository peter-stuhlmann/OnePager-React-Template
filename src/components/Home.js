import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Intro from './Intro';
import Outro from './Outro';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';
import SectionImage from './SectionImage';
import PortfolioImage from './PortfolioImage';

export default function Home() {
  return (
    <Fragment>
      <Intro />
      <Section id="one">
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
              src="https://image-placeholder.vercel.app/?w=250&h=120&text=ONE"
              alt="Placeholder"
            />
            <Navigation color="#000" underlineColor="#fff" />
          </div>
        </div>
        <div>
          <p>
            <b>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt.
            </b>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <h3>Consetetur sadipscing elitr</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <p>
            <b>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
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
      </Section>
      <Section id="two">
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
              src="https://image-placeholder.vercel.app/?w=250&h=120&text=TWO"
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
      </Section>
      <Section id="three">
        <div style={{ backgroundColor: '#292929', padding: 0 }}>
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
              src="https://image-placeholder.vercel.app/?w=250&h=120&text=THREE"
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
            height: '100vh',
            padding: '60px',
          }}
        >
          <div>
            <p>
              <b>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt
              </b>
            </p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            <h3>Johne Doe</h3>
            <p>
              Lorem ipsum dolor sit amet
              <br />
              <a href="mailto:example@example.com">example@example.com</a>
            </p>
            <SocialMedia />
          </div>
          <FooterLink to="/imprint">Imprint</FooterLink>
        </div>
      </Section>
      <Outro />
    </Fragment>
  );
}

const Section = styled.section`
  position: relative;
  z-index: 1;
  background-color: #fff;

  & > div {
    box-sizing: border-box;
    padding: 96px;

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

    p,
    h3 {
      margin: 0;
      padding: 24px;
    }

    ol {
      list-style-type: none;
      counter-reset: ol-counter;
      margin: 0;
      padding: 0;

      & > li {
        counter-increment: ol-counter;

        &::before {
          content: counter(ol-counter) '. ';
          color: rgb(247, 72, 78);
          font-weight: bold;
        }
      }
    }

    a {
      color: rgb(247, 72, 78);

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #000 !important;
  font-weight: bold;
  padding: 24px;
  text-transform: uppercase;

  &:hover {
    color: rgb(247, 72, 78) !important;
  }
`;
