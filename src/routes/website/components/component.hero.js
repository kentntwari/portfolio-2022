import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../../utilities/hooks/useFetchWebsiteDetails';

import LinksToWebsite from '../../../components/blocks/component.linksToWebsite';

import { article, divWrapper, heading, paragraph } from '../styles/styles.hero';

const Hero = () => {
  let { website: slug } = useParams();

  const { title, summary } = useFetchWebsiteDetails(slug);

  return (
    <article className={article}>
      <div className={divWrapper}>
        <h1 className={heading}>{title && title}</h1>
        <p className={paragraph}>{summary && summary}</p>
      </div>

      <LinksToWebsite />
    </article>
  );
};

export default Hero;
