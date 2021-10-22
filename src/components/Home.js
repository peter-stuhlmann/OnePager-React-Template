import React, { Fragment } from 'react';

import Intro from './Intro';
import Outro from './Outro';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function Home() {
  return (
    <Fragment>
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Outro />
    </Fragment>
  );
}
