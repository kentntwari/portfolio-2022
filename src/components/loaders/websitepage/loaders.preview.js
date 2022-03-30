import React from 'react';

import { LoadSnippet } from '../homepage/loaders.demo';

export const LoadPreview = () => {
  return (
    <div className="relative mt-20 flex justify-center">
      <LoadSnippet />
    </div>
  );
};
