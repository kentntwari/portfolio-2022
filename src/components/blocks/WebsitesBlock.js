import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsites from '../../utilities/hooks/useFetchWebsites';
import { websiteDataProps as data } from '../../utilities/functions/websiteDataProps';

import Website from '../cards/Website';

const WebsitesBlock = () => {
  const works = useFetchWebsites();

  return (
    <div className="lg:px-9 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
      {works !== null &&
        works.map(({ title, trailer, slug }, index) => (
          <Fragment key={uuidv4()}>
            <Website {...data(index, title, trailer, slug)} />
          </Fragment>
        ))}
    </div>
  );
};

export default WebsitesBlock;
