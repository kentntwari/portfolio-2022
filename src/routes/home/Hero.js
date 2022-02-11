import React from 'react';

import ButtonPrimary from '../../components/buttons/ButtonPrimary';

const Hero = () => {
  return (
    <section>
      <article className="flex flex-col items-center gap-[11px]">
        <h1 className="text-center">Bringing designs to life with Code</h1>
        <p className="text-center">
          Got an idea or a mockup of your design you'd like to see on the web? No problem
          - I'll code it out for you and make it functional!
        </p>
        <ButtonPrimary>Check out my work</ButtonPrimary>
      </article>
    </section>
  );
};

export default Hero;
