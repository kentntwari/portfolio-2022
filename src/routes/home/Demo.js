import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchHomepageDemo from '../../utilities/hooks/useFetchHomepageDemo';

import DemoItem from '../../components/blocks/DemoItem';

const Demo = () => {
  const snippets = useFetchHomepageDemo();

  return (
    <section className="w-fit mx-auto mt-48 flex flex-col">
      {snippets &&
        snippets.map(
          (elt) =>
            elt !== null && (
              <Fragment key={uuidv4()}>
                <DemoItem image={elt.snippet} title={elt.title} text={elt.context} />
              </Fragment>
            )
        )}
    </section>
  );
};

export default Demo;
