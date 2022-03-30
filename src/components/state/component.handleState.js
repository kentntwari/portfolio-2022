import React, { Fragment } from 'react';

const HandleState = ({ ...props }) => {
  const { showLoader = false, showError = false, loader, error, children } = props;

  if (showLoader && loader) return <Fragment>{loader}</Fragment>;

  if (showLoader && !loader)
    return (
      <div className="w-full h-[100vh]">
        <p>Data is Loading</p>
      </div>
    );

  if (showError && error) return <Fragment>{error}</Fragment>;

  if (showError && !error)
    return (
      <div className="w-full h-[25vh]">
        <p>Error Occured</p>
      </div>
    );

  return <Fragment>{children}</Fragment>;
};

export default HandleState;
