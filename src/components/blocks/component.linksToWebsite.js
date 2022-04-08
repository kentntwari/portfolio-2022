import React, { Fragment, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../utilities/hooks/useFetchWebsiteDetails';

import { button_primary } from '../../styles/buttons/styles.buttonPrimary';
import { button_secondary } from '../../styles/buttons/styles.buttonSecondary';

const LinksToWebsite = () => {
  const { website: slug } = useParams();

  const { response } = useFetchWebsiteDetails(slug);

  const { links } = response;

  const displayLinks = useCallback(() => {
    if (response)
      return (
        <div className="flex flex-col md:flex-row gap-5">
          <a
            href={links.website ? links.website : '/'}
            target="_blank"
            rel="noreferrer"
            className={`py-5 px-7.5 text-center ${button_primary}`}>
            View live site
          </a>

          <a
            href={links.repo ? links.repo : '/'}
            target="_blank"
            rel="noreferrer"
            className={`py-5 px-7.5 text-center ${button_secondary}`}>
            View Git repo
          </a>
        </div>
      );
  }, [response, links.repo, links.website]);

  return <Fragment>{displayLinks()}</Fragment>;
};

export default LinksToWebsite;
