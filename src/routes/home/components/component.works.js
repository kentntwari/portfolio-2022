import React, { Fragment } from 'react';

import useFetchWebsites from '../../../utilities/hooks/useFetchWebsites';

import HandleState from '../../../components/state/component.handleState';
import { LoadWebsitesGrid } from '../../../components/loaders/homepage/loaders.websites';
import WebsitesGrid from '../../../components/blocks/component.websitesGrid';

import { article, heading } from '../styles/styles.works';

import CircleWorksHomeLeft from '../../../components/background/homepage/component.circleWorksLeft';
import BlobWorksHomeCenter from '../../../components/background/homepage/component.blobWorksCenter';

const Works = () => {
  const { is_api_valid, is_loading, is_error } = useFetchWebsites();

  return (
    <article className={article}>
      <h2 className={heading}>Explore more of my work</h2>

      {!is_api_valid && <HandleState showLoader={true} loader={<LoadWebsitesGrid />} />}

      {is_error && <HandleState showError={true} error={<LoadWebsitesGrid />} />}

      <HandleState showLoader={is_loading} loader={<LoadWebsitesGrid />}>
        <WebsitesGrid />
      </HandleState>

      <Fragment>
        <CircleWorksHomeLeft />
        <BlobWorksHomeCenter />
      </Fragment>
    </article>
  );
};

export default Works;
