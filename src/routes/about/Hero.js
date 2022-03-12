import React, { Fragment } from 'react';

import useFetchBackground from '../../utilities/hooks/useFetchBackground';

import Headshot from './Headshot';

import CircleHeroAboutLeft from '../../components/background/aboutPage/CircleHeroAboutLeft';
import CircleHeroAboutRight from '../../components/background/aboutPage/CircleHeroAboutRight';

const Hero = () => {
  const { bio, profileImage } = useFetchBackground();

  return (
    <Fragment>
      <article className="relative flex flex-col items-center gap-5">
        <h1>
          Hello,
          {window.innerHeight < 768 && <br />} my name is Kent
        </h1>

        <p>{bio && bio}</p>

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
