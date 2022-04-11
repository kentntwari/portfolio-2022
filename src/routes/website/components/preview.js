import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../../utilities/hooks/useFetchWebsiteDetails';

import HandleState from '../../../components/state/HandleState';
import { LoadPreview } from '../../../components/loaders/websitepage/Preview';

import { figure, img } from '../styles/preview';

import CirclePreviewTopLeft from '../../../components/background/website/CirclePreviewTopLeft';

const Preview = () => {
  const { website: slug } = useParams();

  const { response } = useFetchWebsiteDetails(slug);

  return (
    <HandleState showLoader={response.preview ? false : true} loader={<LoadPreview />}>
      {response.preview && (
        <figure className={figure}>
          <img className={img} src={response.preview} alt={`preview_${slug}`} />

          <CirclePreviewTopLeft />
        </figure>
      )}
    </HandleState>
  );
};

export default Preview;
