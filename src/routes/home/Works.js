import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsites from '../../utilities/hooks/useFetchWebsites';
import ButtonSecondary from '../../components/buttons/ButtonSecondary';

import CircleCenter from '../../components/background/homepage/CircleCenter';
import BlobWorksHomeCenter from '../../components/background/homepage/BlobWorksHomeCenter';

const Works = () => {
  const works = useFetchWebsites();

  return (
    <article className="relative z-10 flex flex-col items-center gap-14">
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

      <Fragment>
        <CircleCenter
          bgColor="bg-pink-16"
          coordinatesX="left-0"
          coordinatesY="top-[450px]"
        />
        <BlobWorksHomeCenter />
      </Fragment>
    </article>
  );
};

export default Works;
