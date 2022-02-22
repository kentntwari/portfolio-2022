import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsites from '../../utilities/hooks/useFetchWebsites';

import Website from './Website';
import BlobWebsitesWorksRight from '../../components/background/workspage/BlobWebsitesWorksRight';

const Websites = () => {
  const websites = useFetchWebsites();

  return (
    <main className="relative mt-[76px] flex flex-col gap-[30px]">
      {websites !== null ? (
        websites.map(({ title, trailer }) => (
          <Fragment key={uuidv4()}>
            <Website title={title} description={trailer} />
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
