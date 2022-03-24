import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsiteDetails from '../../../utilities/hooks/useFetchWebsiteDetails';

import Feature from '../../../components/cards/component.feature';

import { section } from '../styles/styles.features';

import CircleFeaturesBottomLeft from '../../../components/background/website/component.circleFeaturesBottomLeft';

const Features = () => {
  let { website: slug } = useParams();

  const { features } = useFetchWebsiteDetails(slug);

  return (
    <section className={section}>
      {features !== null &&
        features.map((feature, index) => (
          <Fragment key={uuidv4()}>
            <Feature data={feature} index={index} />
          </Fragment>
        ))}

      <Fragment>
        <CircleFeaturesBottomLeft />
      </Fragment>
    </section>
  );
};

export default Features;
