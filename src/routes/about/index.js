import React, { Fragment } from 'react';

import Hero from './components/component.hero';
import Facts from './components/component.facts';
import Prompts from './components/component.prompts';
import FAQ from './components/component.FAQ';

const About = () => {
  return (
    <Fragment>
      <Hero />
      <Facts />
      <Prompts />
      <FAQ />
    </Fragment>
  );
};

export default About;
