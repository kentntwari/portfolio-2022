import React, { useMemo } from 'react';

import ButtonPrimary from '../buttons/component.buttonPrimary';
import ButtonSecondary from '../buttons/component.buttonSecondary';

const LinksToWebsite = () => {
  const styles = useMemo(() => 'py-5 px-7.5 text-center', []);

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <ButtonPrimary url="/" className={styles}>
        View live site
      </ButtonPrimary>
      <ButtonSecondary url="/" className={styles}>
        View Git repo
      </ButtonSecondary>
    </div>
  );
};

export default LinksToWebsite;
