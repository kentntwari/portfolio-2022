import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsites from '../../utilities/hooks/useFetchWebsites';
import Website from '../works/Website';

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
            <Fragment key={uuidv4()}>
              <Website title={title} description={trailer} />
            </Fragment>
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
