import React, { Fragment } from 'react';

import Bio from './Bio';
import Headshot from './Headshot';

import { article } from '../styles/hero';

import CircleHeroAboutLeft from '../../../components/background/aboutPage/CircleHeroLeft';
import CircleHeroAboutRight from '../../../components/background/aboutPage/CircleHeroRight';

const Hero = () => {
  return (
    <Fragment>
      <article className={article}>
        <Bio />

        <Fragment>
          <CircleHeroAboutLeft />
          <CircleHeroAboutRight />
        </Fragment>
      </article>

      <Headshot />
    </Fragment>
  );
};

export default Hero;
