import React, { Fragment, useState, useEffect, useCallback } from 'react';

import SnippetLoader from '../loaders/loader.snippet';
import SnippetCardLoader from '../loaders/loader.snippetCard';

import {
  default_demo_snippet,
  default_demo_card,
  arrow_styles,
  parent_styles,
} from '../../styles/blocks/styles.demoItem';

const DemoItem = ({ text, title, image }) => {
  const [arrowIcon, setArrowIcon] = useState(null);
  const [demoSnippet, setDemoSnippet] = useState(null);
  const [demoCard, setDemoCard] = useState(null);

  useEffect(() => {
    let isMounted = true;

    import('../../utilities/functions/customSnippetStyles').then(
      ({ modifySnippet }) =>
        isMounted &&
        setDemoSnippet(() => (
          <img
            className={`${modifySnippet(title)} ${default_demo_snippet}`}
            src={image}
            alt={`${title}_snippet`}
          />
        ))
    );

    return () => (isMounted = false);
  }, [title, image, text]);

  useEffect(() => {
    let isMounted = true;

    import('../../utilities/functions/generateCardSnippetTextStyles').then(
      ({ cardTextClass }) => {
        if (isMounted) {
          setDemoCard(() => (
            <figcaption className={`${cardTextClass(title)} ${default_demo_card}`}>
              {text}
            </figcaption>
          ));

          import('../../utilities/images/curly-arrow.png').then((module) =>
            setArrowIcon(() => {
              function arrowCustomStyles(title) {
                if (title === 'code') return arrow_styles.code;
                if (title === 'figma') return arrow_styles.figma;
                if (title === 'website') return arrow_styles.website;
              }

              return (
                <img
                  src={module.default}
                  className={arrowCustomStyles(title)}
                  alt="curly-arrow"
                />
              );
            })
          );
        }
      }
    );

    return () => (isMounted = false);
  }, [text, title]);

  const displayItem = useCallback(() => {
    function generateParentStyles(title) {
      if (title === 'code') return parent_styles.code;
      if (title === 'figma') return parent_styles.figma;
      if (title === 'website') return parent_styles.website;
    }

    return (
      <figure className={generateParentStyles(title)}>
        {demoSnippet ? demoSnippet : <SnippetLoader />}

        {demoCard ? demoCard : <SnippetCardLoader />}

        {arrowIcon}
      </figure>
    );
  }, [arrowIcon, demoCard, demoSnippet, title]);

  return <Fragment>{displayItem()}</Fragment>;
};

export default DemoItem;
