import React, { Fragment, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { button_primary } from '../../styles/buttons/buttonPrimary';
import { link_contact } from '../../styles/footer/styles';

export const links = [
  {
    name: 'Indeed',
    url: `https://my.indeed.com/resume?hl=fr&co=CA&
        from=gnav-homepage&_ga=2.245275845.1712935781.1649452521-452057198.1649452521`,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/kentntwari/',
  },
];

export const ContactLinks = () => {
  const contactLinks = useCallback(() => {
    return links.map(({ name, url }) => (
      <a
        key={uuidv4()}
        target="_black"
        rel="noreferrer"
        href={url}
        className={`py-5 px-7.5 md:px-5 lg:px-7.5 text-center ${button_primary}`}>
        Contact me on {name}
      </a>
    ));
  }, []);

  return <Fragment>{contactLinks()}</Fragment>;
};

export const FooterContactLinks = () => {
  const contactLinks = useCallback(() => {
    return links.map(({ name, url }) => (
      <a
        key={uuidv4()}
        href={url}
        target="_blank"
        rel="noreferrer"
        className={link_contact}>
        Contact me on {name}
      </a>
    ));
  }, []);

  return <Fragment>{contactLinks()}</Fragment>;
};
