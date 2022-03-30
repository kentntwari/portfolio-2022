import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsites from '../../utilities/hooks/useFetchWebsites';
import { websiteDataProps as data } from '../../utilities/functions/websiteDataProps';

import Website from '../cards/component.website';

import { websites_grid } from '../../styles/blocks/styles.websitesGrid';

const WebsitesBlock = () => {
  const { response } = useFetchWebsites();

  return (
    <Fragment>
      <div className={websites_grid}>
        {response &&
          response.map(({ title, trailer, slug }, index) => (
            <Fragment key={uuidv4()}>
              <Website {...data(index, title, trailer, slug)} />
            </Fragment>
          ))}
      </div>
    </Fragment>
  );
};

export default WebsitesBlock;
