import React, { Fragment } from 'react';

import useFetchBackground from '../../utilities/hooks/useFetchBackground';

import Hero from './components/Hero';
import Facts from './components/Facts';
import Prompts from './components/Prompts';
import FAQ from './components/FAQ';

const About = () => {
  const { is_api_valid, is_error } = useFetchBackground();

  return (
    <Fragment>
      {!is_api_valid && console.warn('API IS INVALID')}

      {is_error && console.error('ERROR OCCURED')}

      <Hero />
      <Facts />
      <Prompts />
      <FAQ />
    </Fragment>
  );
};

export default About;
