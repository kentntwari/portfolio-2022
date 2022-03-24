import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../../utilities/hooks/useFetchWebsiteDetails';

import { figure, img } from '../styles/styles.preview';

import CirclePreviewTopLeft from '../../../components/background/website/component.circlePreviewTopLeft';

const Preview = () => {
  const params = useParams();

  const { preview } = useFetchWebsiteDetails(params.website);

  return (
    <figure className={figure}>
      {preview && <img className={img} src={preview} alt={`preview_${params.website}`} />}

      <CirclePreviewTopLeft />
    </figure>
  );
};

export default Preview;
