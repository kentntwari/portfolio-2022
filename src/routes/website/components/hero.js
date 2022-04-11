import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../../utilities/hooks/useFetchWebsiteDetails';

import HandleState from '../../../components/state/HandleState';
import { LoadHero } from '../../../components/loaders/websitepage/Hero';
import LinksToWebsite from '../../../components/blocks/LinksToWebsites';

import { article, divWrapper, heading, paragraph } from '../styles/hero';

const Hero = () => {
  let { website: slug } = useParams();

  const { response } = useFetchWebsiteDetails(slug);

  function evaluateResponse() {
    if (!response.title) return true;

    if (!response.summary) return true;

    return false;
  }

  return (
    <HandleState showLoader={evaluateResponse()} loader={<LoadHero />}>
      <article className={article}>
        <div className={divWrapper}>
          {response.title && <h1 className={heading}>{response.title}</h1>}

          {response.summary && <p className={paragraph}>{response.summary}</p>}
        </div>

        <LinksToWebsite />
      </article>
    </HandleState>
  );
};

export default Hero;
