import React, { Fragment } from 'react';

import WebsitesBlock from '../../components/blocks/WebsitesBlock';
import Circle from '../../components/background/Circle';
import BlobWorksHomeCenter from '../../components/background/homepage/BlobWorksHomeCenter';

const Works = () => {
  return (
    <article className="relative z-10 flex flex-col lg:items-center gap-[42px]">
      <h2 className="lg:w-5/12">Explore more of my work</h2>
      <WebsitesBlock />

      <Fragment>
        <Circle bgColor="bg-pink-16" coordinatesX="left-0" coordinatesY="top-[270px]" />
        <BlobWorksHomeCenter />
      </Fragment>
    </article>
  );
};

export default Works;
