import React, { Fragment } from 'react';

import Demo from './Demo';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';

import { section, article, heading, paragraph, button } from '../styles/hero';

import BlobHeroHomeLeft from '../../../components/background/homepage/BlobHeroLeft';
import CircleRightHero from '../../../components/background/homepage/CircleRightHero';

const Hero = () => {
  return (
    <section className={section}>
      <article className={article}>
        <h1 className={heading}>Bringing designs to life with Code</h1>
        <p className={paragraph}>
          Got an idea or a mockup of your design you'd like to see on the web? No problem
          - I'll code it out for you and make it functional!
        </p>
        <ButtonPrimary url="/works" variant={button}>
          Check out my work
        </ButtonPrimary>
      </article>

      <Demo />

      <Fragment>
        <BlobHeroHomeLeft />
        <CircleRightHero />
      </Fragment>
    </section>
  );
};

export default Hero;
