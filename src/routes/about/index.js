import React, { Fragment } from 'react';

import useFetchBackground from '../../utilities/hooks/useFetchBackground';

import Hero from './components/component.hero';
import Facts from './components/component.facts';
import Prompts from './components/component.prompts';
import FAQ from './components/component.FAQ';

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
