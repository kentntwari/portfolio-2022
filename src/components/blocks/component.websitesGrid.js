import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsites from '../../utilities/hooks/useFetchWebsites';
import { websiteDataProps as data } from '../../utilities/functions/websiteDataProps';

import HandleState from '../state/component.handleState';
import { LoadWebsitesGrid } from '../loaders/homepage/loaders.websites';
import Website from '../cards/component.website';

import { websites_grid } from '../../styles/blocks/styles.websitesGrid';

const WebsitesGrid = () => {
  const { is_api_valid, is_error, is_loading, response } = useFetchWebsites();

  if (is_loading || !is_api_valid)
    return <HandleState showLoader={true} loader={<LoadWebsitesGrid />} />;

  if (is_error) return <HandleState showError={true} error={<LoadWebsitesGrid />} />;

  return (
    <HandleState showLoader={response ? false : true} loader={<LoadWebsitesGrid />}>
      <div className={websites_grid}>
        {response &&
          response.map(({ title, trailer, slug }, index) => (
            <Fragment key={uuidv4()}>
              <Website {...data(index, title, trailer, slug)} />
            </Fragment>
          ))}
      </div>
    </HandleState>
  );
};

export default WebsitesGrid;
