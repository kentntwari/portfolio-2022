import React, { useState, useEffect } from 'react';

import curlyArrow from '../../utilities/images/curly-arrow.png';
import { LoadSnippet, LoadSnippetCard } from '../loaders/homepage/Demo';

import { generateParentStyles as wrapper } from '../../utilities/functions/customSnippetStyles';
import { arrowCustomStyles as arrow } from '../../utilities/functions/customArrowStyles';

import {
  default_demo_snippet,
  default_demo_card,
} from '../../styles/blocks/demoItem';

const DemoItem = ({ text, title, image }) => {
  const [demoSnippet, setDemoSnippet] = useState(() => <LoadSnippet mappingTo={title} />);
  const [demoCard, setDemoCard] = useState(() => <LoadSnippetCard mappingTo={title} />);

  useEffect(() => {
    let isMounted = true;

    // set image snippet
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
    let is_mounted = true;

    // set card for image snippet
    import('../../utilities/functions/generateCardSnippetTextStyles').then(
      ({ cardTextClass }) =>
        is_mounted &&
        setDemoCard(() => (
          <figcaption className={`${cardTextClass(title)} ${default_demo_card}`}>
            {text}
          </figcaption>
        ))
    );

    return () => (is_mounted = false);
  }, [text, title]);

  return (
    <figure className={wrapper(title)}>
      {demoSnippet}

      <img src={curlyArrow} className={arrow(title)} alt="curly-arrow" />

      {demoCard}
    </figure>
  );
};

export default DemoItem;
