import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import useFetchWebsiteDetails from '../../utilities/hooks/useFetchWebsiteDetails';

import Feature from '../../components/cards/Feature';

import BlobFeaturesWebsiteCenter from '../../components/background/website/BlobFeaturesWebsiteCenter';

const Features = () => {
  let { website: slug } = useParams();

  const { features } = useFetchWebsiteDetails(slug);

  return (
    <section className="relative lg:w-10/12 mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
      {features !== null &&
        features.map((feature, index) => (
          <Fragment key={uuidv4()}>
            <Feature data={feature} index={index} />
          </Fragment>
        ))}

      <Fragment>
        <BlobFeaturesWebsiteCenter />
      </Fragment>
    </section>
  );
};

export default Features;
