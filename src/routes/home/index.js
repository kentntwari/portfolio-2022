import React from 'react';

import Hero from './Hero';
import Tech from './Tech';
import Works from './Works';

const Home = () => {
  return (
    <main className="flex flex-col gap-33">
      <Hero />
      <Tech />
      <Works />
    </main>
  );
};

export default Home;
