import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsiteDetails from '../../../utilities/hooks/useFetchWebsiteDetails';

import HandleState from '../../../components/state/component.handleState';
import { LoadFeatures } from '../../../components/loaders/websitepage/loaders.features';
import Feature from '../../../components/cards/component.feature';

import { section } from '../styles/styles.features';

import CircleFeaturesBottomLeft from '../../../components/background/website/component.circleFeaturesBottomLeft';

const Features = () => {
  let { website: slug } = useParams();

  const { response } = useFetchWebsiteDetails(slug);

  return (
    <HandleState showLoader={response.features ? false : true} loader={<LoadFeatures />}>
      <section className={section}>
        {response.features &&
          response.features.map((feature, index) => (
            <Fragment key={uuidv4()}>
              <Feature data={feature} index={index} />
            </Fragment>
          ))}

        <Fragment>
          <CircleFeaturesBottomLeft />
        </Fragment>
      </section>
    </HandleState>
  );
};

export default Features;
