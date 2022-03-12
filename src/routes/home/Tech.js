import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchTechUsed from '../../utilities/hooks/useFetchTechUsed';

import Circle from '../../components/background/Circle';

const Tech = () => {
  const tech = useFetchTechUsed();
  return (
    <section
      className="relative bg-green-100 py-10 lg:py-20
     px-5 lg:px-10 rounded-[10px] flex flex-col lg:items-center gap-10">
      <h2
        className="lg:w-9/12 lg:text-3xl text-[1.625rem]
       lg:text-center text-white-full">
        Here's some of the technologies I use in my projects
      </h2>

      <div className="flex flex-wrap justify-between gap-5 lg:gap-[61px]">
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

      <Circle coordinatesY="top-[151px]" coordinatesX="-left-[35px]" />
    </section>
  );
};

export default Tech;
