import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsites from '../../utilities/hooks/useFetchWebsites';
import ButtonSecondary from '../../components/buttons/ButtonSecondary';

const Works = () => {
  const works = useFetchWebsites();

  return (
    <article className="flex flex-col items-center gap-14">
      <h2 className="text-center">Explore more of my work</h2>
      <div className="grid grid-cols-1 gap-[1.875rem]">
        {works !== null &&
          works.map(({ title, trailer }) => (
            <article
              key={uuidv4()}
              className="bg-white-full p-5 shadow-md flex flex-col items-center gap-5">
              <h4 className="text-center">{title}</h4>
              <p className="text-center">{trailer}</p>
              <ButtonSecondary>Learn More</ButtonSecondary>
            </article>
          ))}
      </div>
    </article>
  );
};

export default Works;
