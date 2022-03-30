import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../menu/component.navigation';
import Copyright from '../../utilities/images/copyright.png';

import {
  divider,
  mobile_divider,
  footer,
  section_right,
  section_left,
  section_contact,
  section_right_div_wrapper,
  section_right_paragraph,
  section_nav_copyright,
  link_contact,
  navigation,
  paragraph_copyright,
  img_copyright,
} from '../../styles/footer/styles';

const Footer = () => {
  return (
    <Fragment>
      <div className={divider}></div>

      <footer className={footer}>
        <section className={section_right}>
          <div className={section_right_div_wrapper}>
            <h2 className="lg:text-right">Let's get in touch</h2>
            <p className={section_right_paragraph}>
              I would love to contribute to your business success, whether that involves
              hiring me as part of your team or for one of your projects.
            </p>
          </div>

          <section className={section_contact}>
            <Link to="/" className={link_contact}>
              Contact me on Indeed
            </Link>
            <Link to="/" className={link_contact}>
              Contact me on Linkedin
            </Link>
          </section>
        </section>

        <section className={section_left}>
          <div className={mobile_divider}></div>

          <section className={section_nav_copyright}>
            <Navigation
              hiddenOnMobile={false}
              className={navigation}
              applyClassOnLink="font-bold"
            />

            <p className={paragraph_copyright}>
              <span>
                <img className={img_copyright} src={Copyright} alt="copyright" />
              </span>
              Kent Ntwari. 2022
            </p>
          </section>
        </section>
      </footer>
    </Fragment>
  );
};

export default Footer;
