import React, { Fragment } from 'react';

import useFetchBackground from '../../../utilities/hooks/useFetchBackground';

import Headshot from './component.headshot';

import useWatchWindowSize from '../../../utilities/hooks/useWatchWindowSize';

import { article, heading, paragraph } from '../styles/styles.hero';

import CircleHeroAboutLeft from '../../../components/background/aboutPage/component.circleHeroLeft';
import CircleHeroAboutRight from '../../../components/background/aboutPage/component.circleHeroRight';

const Hero = () => {
  const { bio, profileImage } = useFetchBackground();

  const [isWithinMaxWidth, , ,] = useWatchWindowSize({ maxWidth: '768px' });

  return (
    <Fragment>
      <article className={article}>
        <h1 className={heading}>
          Hello,
          {isWithinMaxWidth && <br />} my name is Kent.
        </h1>

        <p className={paragraph}>{bio && bio}</p>

        <Fragment>
          <CircleHeroAboutLeft />
          <CircleHeroAboutRight />
        </Fragment>
      </article>

      {profileImage && <Headshot asset={profileImage} />}
    </Fragment>
  );
};

export default Hero;
