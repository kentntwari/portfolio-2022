import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../../utilities/hooks/useFetchWebsiteDetails';

import HandleState from '../../../components/state/HandleState';
import { LoadChallenges } from '../../../components/loaders/websitepage/Challenges';
import LinksToWebsite from '../../../components/blocks/LinksToWebsites';

import { section, divWrapper, heading, paragraph } from '../styles/challenges';

const Challenges = () => {
  let { website: slug } = useParams();

  const { response } = useFetchWebsiteDetails(slug);

  return (
    <HandleState
      showLoader={response.challenges ? false : true}
      loader={<LoadChallenges />}>
      {response.challenges && (
        <section className={section}>
          <div className={divWrapper}>
            <h2 className={heading}>Challenges involved in the making of this project</h2>
            <p className={paragraph}>{response.challenges}</p>
          </div>

          <LinksToWebsite />
        </section>
      )}
    </HandleState>
  );
};

export default Challenges;
