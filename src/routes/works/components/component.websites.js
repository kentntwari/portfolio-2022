import React, { Fragment } from 'react';

import useFetchWebsites from '../../../utilities/hooks/useFetchWebsites';

import HandleState from '../../../components/state/component.handleState';
import { LoadWebsitesGrid } from '../../../components/loaders/homepage/loaders.websites';
import WebsitesGrid from '../../../components/blocks/component.websitesGrid';

import { main } from '../styles/styles.websites';

import BlobWebsitesWorksRight from '../../../components/background/workspage/component.blobWorksRight';

const Websites = () => {
  const { is_loading } = useFetchWebsites();

  return (
    <main className={main}>
      <HandleState showLoader={is_loading} loader={<LoadWebsitesGrid />}>
        <WebsitesGrid />
      </HandleState>

      <Fragment>
        <BlobWebsitesWorksRight />
      </Fragment>
    </main>
  );
};

export default Websites;
