import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsites from '../../utilities/hooks/useFetchWebsites';
import { websiteDataProps as data } from '../../utilities/functions/websiteDataProps';

import Website from './Website';
import BlobWebsitesWorksRight from '../../components/background/workspage/BlobWebsitesWorksRight';

const Websites = () => {
  const websites = useFetchWebsites();

  return (
    <main className="relative mt-12 flex flex-col gap-5">
      {websites !== null ? (
        websites.map(({ title, trailer, slug }, index) => (
          <Fragment key={uuidv4()}>
            <Website {...data(index, title, trailer, slug)} />
          </Fragment>
        ))
      ) : (
        <div className="w-full">
          <h2 className="text-center">Loading</h2>
        </div>
      )}

      <Fragment>
        <BlobWebsitesWorksRight />
      </Fragment>
    </main>
  );
};

export default Websites;
