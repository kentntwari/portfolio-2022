import React, { Fragment } from 'react';

import WebsitesGrid from '../../../components/blocks/WebsitesGrid';

import { article, heading } from '../styles/works';

import CircleWorksHomeLeft from '../../../components/background/homepage/CircleWorksLeft';
import BlobWorksHomeCenter from '../../../components/background/homepage/BlobWorksCenter';

const Works = () => {
  return (
    <article className={article}>
      <h2 className={heading}>Explore more of my work</h2>

      <WebsitesGrid />

      <Fragment>
        <CircleWorksHomeLeft />
        <BlobWorksHomeCenter />
      </Fragment>
    </article>
  );
};

export default Works;
