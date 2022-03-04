import React, { Fragment } from 'react';

import ButtonPrimary from '../../components/buttons/ButtonPrimary';

import BlobHeroHomeLeft from '../../components/background/homepage/BlobHeroHomeLeft';
import CircleRight from '../../components/background/homepage/CircleRight';

const Hero = () => {
  return (
    <section className="relative">
      <article className="flex flex-col items-center gap-[11px]">
        <h1 className="text-center">Bringing designs to life with Code</h1>
        <p className="w-[266px] text-center">
          Got an idea or a mockup of your design you'd like to see on the web? No problem
          - I'll code it out for you and make it functional!
        </p>
        <ButtonPrimary url="/works">Check out my work</ButtonPrimary>
      </article>

      <Fragment>
        <BlobHeroHomeLeft />
        <CircleRight />
      </Fragment>
    </section>
  );
};

export default Hero;
