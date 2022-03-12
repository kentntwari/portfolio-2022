import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../utilities/hooks/useFetchWebsiteDetails';

import LinksToWebsite from '../../components/blocks/LinksToWebsite';

const Challenges = () => {
  let { website: slug } = useParams();

  const { challenges } = useFetchWebsiteDetails(slug);

  return (
    <Fragment>
      <section className="mt-[132px] flex flex-col lg:items-center gap-7.5">
        <div className="flex flex-col lg:items-center gap-5">
          <h2 className="lg:text-center">
            Challenges involved in the making of this project
          </h2>
          <p className='lg:major lg:text-center'>{challenges}</p>
        </div>

        <LinksToWebsite />
      </section>
    </Fragment>
  );
};

export default Challenges;
