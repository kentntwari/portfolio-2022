import React, { Fragment } from 'react';

import { LoadPage } from '../loaders/page/loaders.page';

const HandleState = ({ ...props }) => {
  const {
    showLoader = false,
    showError = false,
    loader,
    error,
    children,
    variant = null,
  } = props;

  if (showLoader && loader) return <Fragment>{loader}</Fragment>;

  if (showLoader && !loader)
    return (
      <div
        className={`${
          variant ? variant : ''
        } w-full h-[700px] flex items-center justify-center`}>
        <p>Data is Loading</p>
      </div>
    );

  if (showError && error) return <LoadPage />;

  if (showError && !error)
    return (
      <div
        className={`${
          variant ? variant : ''
        } w-full h-[700px] flex items-center justify-center`}>
        <p>Error occured</p>
      </div>
    );

  return <Fragment>{children}</Fragment>;
};

export default HandleState;
