import React from 'react';

import Hero from './components/component.hero';
import Tech from './components/component.tech';
import Works from './components/component.works';

const Home = () => {
  return (
    <main className="flex 2xl:block flex-col gap-28">
      <Hero />
      <Tech />
      <Works />
    </main>
  );
};

export default Home;
