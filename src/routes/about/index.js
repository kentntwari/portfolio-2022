import React, { Fragment } from 'react';

import Hero from './Hero';
import Facts from './Facts';
import Prompts from './Prompts';
import FAQ from './FAQ';

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
