import React, { Fragment } from 'react';

import Hero from './components/component.hero';
import Preview from './components/component.preview';
import Features from './components/component.features';
import Challenges from './components/components.challenges';

const Website = () => {
  return (
    <Fragment>
      <Hero />
      <Preview />
      <Features />
      <Challenges />
    </Fragment>
  );
};

export default Website;
