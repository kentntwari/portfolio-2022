import { useState, useEffect } from 'react';
import sanityClient from '../../client';

const useFetchTechUsed = () => {
  const [apiEndpoint, setApiEndpoint] = useState(null);
  const [tech, setTech] = useState(null);

  useEffect(() => {
    import('../../api/technologies').then((module) => {
      setApiEndpoint(module.technologies());
    });
  }, []);

  useEffect(() => {
    let isMount = true;

    sanityClient.fetch(apiEndpoint).then((res) => {
      if (isMount) return setTech(res);
    });

    return () => (isMount = false);
  }, [apiEndpoint]);

  return tech;
};

export default useFetchTechUsed;
