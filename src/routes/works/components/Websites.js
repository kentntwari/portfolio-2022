import React, { Fragment } from 'react';

import useFetchWebsites from '../../../utilities/hooks/useFetchWebsites';

import HandleState from '../../../components/state/HandleState';
import { LoadWebsitesGrid } from '../../../components/loaders/homepage/Websites';
import WebsitesGrid from '../../../components/blocks/WebsitesGrid';

import { main } from '../styles/websites';

import BlobWebsitesWorksRight from '../../../components/background/workspage/BlobWorksRight';

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
