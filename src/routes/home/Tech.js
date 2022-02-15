import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchTechUsed from '../../utilities/hooks/useFetchTechUsed';

import CircleCenter from '../../components/background/homepage/CircleCenter';

const Tech = () => {
  const tech = useFetchTechUsed();
  return (
    <section className="relative bg-green-100 py-10 px-5 rounded-[10px] flex flex-col gap-10">
      <h2 className="text-[1.625rem] text-center text-white-full">
        Here's some of the technologies I use in my projects
      </h2>

      <div className="flex flex-wrap justify-center gap-[10px]">
        {tech !== null &&
          tech.map(({ logo, tech: name }) => (
            <img
              key={uuidv4()}
              className="w-[60px] h-[60px]"
              src={logo}
              alt={name}
              title={name}
            />
          ))}
      </div>

      <CircleCenter coordinatesY="top-[151px]" coordinatesX="-left-[35px]" />
    </section>
  );
};

export default Tech;
