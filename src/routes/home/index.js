import React from 'react';

import Hero from './components/Hero';
import Tech from './components/Tech';
import Works from './components/Works';

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
