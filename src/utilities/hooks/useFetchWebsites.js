import { useState, useEffect } from 'react';
import sanityClient from '../../client';

const useFetchWebsites = () => {
  const [apiEndpoint, setApiEndpoint] = useState(null);
  const [websites, setWebsites] = useState(null);

  useEffect(() => {
    import('../../api/websites').then((module) => setApiEndpoint(module.websites()));
  }, []);

  useEffect(() => {
    let isMounted = true;

    sanityClient.fetch(apiEndpoint).then((res) => {
      if (isMounted) return setWebsites(res);
    });

    return () => (isMounted = false);
  }, [apiEndpoint]);

  return websites;
};

export default useFetchWebsites;
