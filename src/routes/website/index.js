import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../utilities/hooks/useFetchWebsiteDetails';

import Hero from './components/component.hero';
import Preview from './components/component.preview';
import Features from './components/component.features';
import Challenges from './components/components.challenges';

import { LoadHero } from '../../components/loaders/websitepage/loaders.hero';
import { LoadPreview } from '../../components/loaders/websitepage/loaders.preview';
import { LoadFeatures } from '../../components/loaders/websitepage/loaders.features';
import { LoadChallenges } from '../../components/loaders/websitepage/loaders.challenges';

const Website = () => {
  const { website: slug } = useParams();

  const { is_loading, is_error, is_api_valid } = useFetchWebsiteDetails(slug);

  function evaluateResponse() {
    if (is_loading) return true;

    if (!is_api_valid) return true;

    if (is_error) return true;

    return false;
  }

  return (
    <Fragment>
      {evaluateResponse() ? (
        <Fragment>
          <LoadHero />
          <LoadPreview />
          <LoadFeatures />
          <LoadChallenges />
        </Fragment>
      ) : (
        <Fragment>
          <Hero />
          <Preview />
          <Features />
          <Challenges />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Website;
