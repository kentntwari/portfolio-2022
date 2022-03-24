import { useState, useEffect } from 'react';
import sanityClient from '../../client';

const useFetchWebsiteDetails = (slug) => {
  const [apiEndPoint, setApiEndpoint] = useState(null);
  const [challenges, setChallenges] = useState(null);
  const [features, setFeatures] = useState(null);
  const [preview, setPreview] = useState(null);
  const [summary, setSummary] = useState(null);
  const [title, setTitle] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    import('../../api/api.website').then((module) => setApiEndpoint(module.website(slug)));
  }, [slug]);

  useEffect(() => {
    let isMounted = true;

    sanityClient.fetch(apiEndPoint).then((res) => {
      if (isMounted && res !== null) {
        setChallenges(res.challenges);
        setFeatures(res.features);
        setPreview(res.preview);
        setSummary(res.summary);
        setTitle(res.title);
        setTrailer(res.trailer);
      }
    });

    return () => (isMounted = false);
  }, [apiEndPoint]);

  return { challenges, features, preview, summary, title, trailer };
};

export default useFetchWebsiteDetails;
