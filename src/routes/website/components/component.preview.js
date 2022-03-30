import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchWebsiteDetails from '../../../utilities/hooks/useFetchWebsiteDetails';

import HandleState from '../../../components/state/component.handleState';
import { LoadPreview } from '../../../components/loaders/websitepage/loaders.preview';

import { figure, img } from '../styles/styles.preview';

import CirclePreviewTopLeft from '../../../components/background/website/component.circlePreviewTopLeft';

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
