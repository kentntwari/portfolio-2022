import React, { Fragment } from 'react';

import Demo from './Demo';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';

import BlobHeroHomeLeft from '../../components/background/homepage/BlobHeroHomeLeft';
import CircleRight from '../../components/background/homepage/CircleRightHero';

const Hero = () => {
  return (
    <section className="relative">
      <article className="flex flex-col lg:items-center gap-5">
        <h1 className="lg:w-9/12 lg:text-center">Bringing designs to life with Code</h1>
        <p className="lg:w-9/12 lg:major lg:text-center">
          Got an idea or a mockup of your design you'd like to see on the web? No problem
          - I'll code it out for you and make it functional!
        </p>
        <ButtonPrimary url="/works" className="w-fit mt-2.5 py-5 px-7.5">
          Check out my work
        </ButtonPrimary>
      </article>

      <Demo />

      <Fragment>
        <BlobHeroHomeLeft />
        <CircleRight blur="270px" />
      </Fragment>
    </section>
  );
};

export default Hero;
