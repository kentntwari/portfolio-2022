import React, { Fragment } from 'react';

import WebsitesBlock from '../../../components/blocks/component.websitesGrid';

import { main } from '../styles/styles.websites';

import BlobWebsitesWorksRight from '../../../components/background/workspage/component.blobWorksRight';

const Websites = () => {
  return (
    <main className={main}>
      <WebsitesBlock />

      <Fragment>
        <BlobWebsitesWorksRight />
      </Fragment>
    </main>
  );
};

export default Websites;
