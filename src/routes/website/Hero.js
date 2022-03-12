import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../utilities/hooks/useFetchWebsiteDetails';

import LinksToWebsite from '../../components/blocks/LinksToWebsite';

const Hero = () => {
  let { website: slug } = useParams();

  const { title, summary } = useFetchWebsiteDetails(slug);

  return (
    <article className="flex flex-col lg:items-center gap-7.5">
      <div className="flex flex-col lg:items-center gap-5">
        <h1 className="lg:text-center">{title && title}</h1>
        <p className="lg:w-11/12 lg:major lg:text-center">{summary && summary}</p>
      </div>

      <LinksToWebsite />
    </article>
  );
};

export default Hero;
