import React, { Fragment } from 'react';

import useFetchBackground from '../../utilities/hooks/useFetchBackground';

import Headshot from './Headshot';

import CircleHeroAboutLeft from '../../components/background/aboutPage/CircleHeroAboutLeft';
import CircleHeroAboutRight from '../../components/background/aboutPage/CircleHeroAboutRight';

const Hero = () => {
  const { bio, profileImage } = useFetchBackground();

  return (
    <article className="relative flex flex-col items-center gap-9">
      <h1 className="text-center">
        Hello,
        <br /> my name is Kent
      </h1>
      <p className="text-center">{bio && bio}</p>
      {profileImage && <Headshot asset={profileImage} />}

      <Fragment>
        <CircleHeroAboutLeft />
        <CircleHeroAboutRight />
      </Fragment>
    </article>
  );
};

export default Hero;
