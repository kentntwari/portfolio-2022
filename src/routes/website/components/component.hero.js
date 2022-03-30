import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../../utilities/hooks/useFetchWebsiteDetails';

import HandleState from '../../../components/state/component.handleState';
import { LoadHero } from '../../../components/loaders/websitepage/loaders.hero';
import LinksToWebsite from '../../../components/blocks/component.linksToWebsite';

import { article, divWrapper, heading, paragraph } from '../styles/styles.hero';

const Hero = () => {
  let { website: slug } = useParams();

  const { response, is_loading } = useFetchWebsiteDetails(slug);

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
