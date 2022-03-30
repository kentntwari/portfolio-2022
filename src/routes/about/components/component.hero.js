import React, { Fragment } from 'react';

import Bio from './components.bio';
import Headshot from './component.headshot';

import { article } from '../styles/styles.hero';

import CircleHeroAboutLeft from '../../../components/background/aboutPage/component.circleHeroLeft';
import CircleHeroAboutRight from '../../../components/background/aboutPage/component.circleHeroRight';

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
