import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchHomepageDemo from '../../../utilities/hooks/useFetchHomepageDemo';

import DemoItem from '../../../components/blocks/component.demoItem';

import { section } from '../styles/styles.demo';

const Demo = () => {
  const snippets = useFetchHomepageDemo();

  return (
    <section className={section}>
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
