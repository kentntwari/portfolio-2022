import React, { Fragment, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchHomepageDemo from '../../../utilities/hooks/useFetchHomepageDemo';

import DemoItem from '../../../components/blocks/component.demoItem';
import HandleState from '../../../components/state/component.handleState';
import { LoadSnippet } from '../../../components/loaders/homepage/loaders.demo';

import { section } from '../styles/styles.demo';

const Demo = () => {
  const snippets = useFetchHomepageDemo();

  const displayDemo = useCallback(() => {
    if (snippets.is_api_valid === false) return <HandleState showLoader={true} />;

    if (snippets.is_error) return <HandleState showError={true} />;

    return (
      <HandleState showLoader={snippets.is_loading}>
        <section className={section}>
          {snippets.response.map((elt) => {
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
        ;
      </HandleState>
    );
  }, [snippets]);

  return <Fragment>{displayDemo()}</Fragment>;
};

export default Demo;
