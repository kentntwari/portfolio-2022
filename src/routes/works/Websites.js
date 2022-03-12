import React, { Fragment } from 'react';

import WebsitesBlock from '../../components/blocks/WebsitesBlock';
import BlobWebsitesWorksRight from '../../components/background/workspage/BlobWebsitesWorksRight';

const Websites = () => {
  return (
    <main
      className="relative mt-14">
      <WebsitesBlock />

      <Fragment>
        <BlobWebsitesWorksRight />
      </Fragment>
    </main>
  );
};

export default Websites;
