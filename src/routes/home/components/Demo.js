import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchHomepageDemo from '../../../utilities/hooks/useFetchHomepageDemo';

import DemoItem from '../../../components/blocks/DemoItem';
import HandleState from '../../../components/state/HandleState';
import { LoadSnippet } from '../../../components/loaders/homepage/Demo';

import { section } from '../styles/demo';

const Demo = () => {
  const { isError, is_api_valid, is_loading, response } = useFetchHomepageDemo();

  if (is_loading || !is_api_valid)
    return <HandleState showLoader={true} className="mb-96" />;

  if (isError) return <HandleState showError={true} className="mb-96" />;

  return (
    <HandleState showLoader={response ? false : true} className="mb-96">
      <section className={section}>
        {response &&
          response.map((elt) => {
            if (elt.is_loading)
              return (
                <Fragment key={uuidv4()}>
                  <LoadSnippet mappingTo={elt.initializer} />
                </Fragment>
              );

            return (
              <Fragment key={uuidv4()}>
                <DemoItem
                  image={elt.response.snippet}
                  title={elt.response.title}
                  text={elt.response.context}
                />
              </Fragment>
            );
          })}
      </section>
    </HandleState>
  );
};

export default Demo;
