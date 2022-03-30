import React, { Fragment } from 'react';

import Demo from './component.demo';
import ButtonPrimary from '../../../components/buttons/component.buttonPrimary';

import { section, article, heading, paragraph, button } from '../styles/styles.hero';

import BlobHeroHomeLeft from '../../../components/background/homepage/component.blobHeroLeft';
import CircleRightHero from '../../../components/background/homepage/component.circleRightHero';

/* EXPORTED COMPONENT */
const Hero = () => {
  return (
    <section className={section}>
      <article className={article}>
        <h1 className={heading}>Bringing designs to life with Code</h1>
        <p className={paragraph}>
          Got an idea or a mockup of your design you'd like to see on the web? No problem
          - I'll code it out for you and make it functional!
        </p>
        <ButtonPrimary url="/works" className={button}>
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
