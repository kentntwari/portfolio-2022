import React, { Fragment } from 'react';

import WebsitesBlock from '../../../components/blocks/component.websitesGrid';

import { article, heading } from '../styles/styles.works';

import CircleWorksHomeLeft from '../../../components/background/homepage/component.circleWorksLeft';
import BlobWorksHomeCenter from '../../../components/background/homepage/component.blobWorksCenter';

const Works = () => {
  return (
    <article className={article}>
      <h2 className={heading}>Explore more of my work</h2>

      <WebsitesBlock />

      <Fragment>
        <CircleWorksHomeLeft />
        <BlobWorksHomeCenter />
      </Fragment>
    </article>
  );
};

export default Works;
