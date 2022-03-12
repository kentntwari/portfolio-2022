import React, { Fragment, useState, useEffect, useCallback } from 'react';

const DemoItem = ({ text, title, image }) => {
  const [arrowIcon, setArrowIcon] = useState(null);
  const [elementStyles, setElementStyles] = useState(null);
  const [cardTextStyles, setCardTextStyles] = useState(null);

  useEffect(() => {
    let isMounted = true;

    import('../../utilities/functions/customSnippetStyles').then(
      (module) =>
        isMounted &&
        setElementStyles(() => (
          <img
            className={`${module.modifySnippet(title)} rounded-md drop-shadow-regular`}
            src={image}
            alt={`${title}_snippet`}
          />
        ))
    );

    return () => (isMounted = false);
  }, [title, image, text]);

  useEffect(() => {
    let isMounted = true;

    import('../../utilities/functions/generateCardSnippetTextStyles').then((module) => {
      if (isMounted) {
        setCardTextStyles(() => {
          const defaultCardClasses =
            'w-[301px] bg-white-full p-5 shadow-snippet rounded-md text-base font-body';

          return (
            <figcaption
              className={`absolute ${module.cardTextClass(title)} ${defaultCardClasses}`}>
              {text}
            </figcaption>
          );
        });

        import('../../utilities/images/curly-arrow.png').then((module) =>
          setArrowIcon(() => {
            function arrowCustomStyles(title) {
              if (title === 'code') return '-top-3 -left-20';
              if (title === 'figma') return '-top-2 -left-20';
              if (title === 'website') return 'top-[15rem] -left-20';
            }

            return (
              <img
                src={module.default}
                className={`absolute ${arrowCustomStyles(title)}`}
                alt="curly-arrow"
              />
            );
          })
        );
      }
    });

    return () => (isMounted = false);
  }, [text, title]);

  const displayItem = useCallback(() => {
    function generateParentStyles(title) {
      if (title === 'code')
        return 'order-1 relative z-10 transform translate-x-[40px] -translate-y-[40px]';
      if (title === 'figma') return 'order-0 transform translate-x-[294px]';
      if (title === 'website')
        return 'order-last relative z-20 transform translate-x-[194px] -translate-y-[74px]';
    }

    return (
      <figure className={generateParentStyles(title)}>
        {elementStyles}

        {elementStyles && cardTextStyles}

        {elementStyles && arrowIcon}
      </figure>
    );
  }, [arrowIcon, cardTextStyles, elementStyles, title]);

  return <Fragment>{displayItem()}</Fragment>;
};

export default DemoItem;
