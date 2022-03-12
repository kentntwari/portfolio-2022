import React, { Fragment } from 'react';

import Hero from './Hero';
import Features from './Features';
import Challenges from './Challenges';

const Website = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Challenges />
    </Fragment>
  );
};

export default Website;
