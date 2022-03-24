import React from 'react';

import { section, heading, paragraph } from '../styles/styles.hero';

const Hero = () => {
  return (
    <section className={section}>
      <h1 className={heading}>Take a look at my work</h1>
      <p className={paragraph}>
        Here's a showcase of projects and concepts I've worked on. Who knows? Yours could
        make the list one day
      </p>
    </section>
  );
};

export default Hero;
