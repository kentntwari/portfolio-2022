import React, { useState, useEffect } from 'react';

import curlyArrow from '../../utilities/images/curly-arrow.png';
import { LoadSnippet, LoadSnippetCard } from '../loaders/homepage/loaders.demo';

import { generateParentStyles as wrapper } from '../../utilities/functions/customSnippetStyles';
import { arrowCustomStyles as arrow } from '../../utilities/functions/customArrowStyles';

import {
  default_demo_snippet,
  default_demo_card,
} from '../../styles/blocks/styles.demoItem';

const DemoItem = ({ text, title, image }) => {
  const [demoSnippet, setDemoSnippet] = useState(() => <LoadSnippet mappingTo={title} />);
  const [demoCard, setDemoCard] = useState(() => <LoadSnippetCard mappingTo={title} />);

  useEffect(() => {
    let isMounted = true;

    import('../../utilities/functions/customSnippetStyles').then(({ modifySnippet }) =>
      setTimeout(
        () =>
          isMounted &&
          setDemoSnippet(() => (
            <img
              className={`${modifySnippet(title)} ${default_demo_snippet}`}
              src={image}
              alt={`${title}_snippet`}
            />
          )),
        2000
      )
    );

    return () => (isMounted = false);
  }, [title, image, text]);

  useEffect(() => {
    let is_mounted = true;

    import('../../utilities/functions/generateCardSnippetTextStyles').then(
      ({ cardTextClass }) =>
        setTimeout(
          () =>
            is_mounted &&
            setDemoCard(() => (
              <figcaption className={`${cardTextClass(title)} ${default_demo_card}`}>
                {text}
              </figcaption>
            )),
          2000
        )
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
