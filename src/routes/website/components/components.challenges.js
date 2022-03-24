import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../../utilities/hooks/useFetchWebsiteDetails';

import LinksToWebsite from '../../../components/blocks/component.linksToWebsite';

import { section, divWrapper, heading, paragraph } from '../styles/styles.challenges';

const Challenges = () => {
  let { website: slug } = useParams();

  const { challenges } = useFetchWebsiteDetails(slug);

  return (
    <Fragment>
      <section className={section}>
        <div className={divWrapper}>
          <h2 className={heading}>Challenges involved in the making of this project</h2>
          <p className={paragraph}>{challenges}</p>
        </div>

        <LinksToWebsite />
      </section>
    </Fragment>
  );
};

export default Challenges;
