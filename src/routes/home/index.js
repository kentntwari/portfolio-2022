import React from 'react';

import Hero from './components/components.hero';
import Tech from './components/components.tech';
import Works from './components/component.works';

import SnippetCard from '../../components/loaders/loader.snippetCard';

const Home = () => {
  return (
    <main className="flex 2xl:block flex-col gap-28">
      <Hero />
      <Tech />
      <SnippetCard />
      <Works />
    </main>
  );
};

export default Home;
