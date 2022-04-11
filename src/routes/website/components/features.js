import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsiteDetails from '../../../utilities/hooks/useFetchWebsiteDetails';

import HandleState from '../../../components/state/HandleState';
import { LoadFeatures } from '../../../components/loaders/websitepage/Features';
import Feature from '../../../components/cards/Feature';

import { section } from '../styles/features';

import CircleFeaturesBottomLeft from '../../../components/background/website/CircleFeaturesBottomLeft';

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
