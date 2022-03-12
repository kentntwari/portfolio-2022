import { useState, useEffect } from 'react';
import sanityClient from '../../client';

const useFetchHomepageDemo = () => {
  const [apiEndpoint, setApiEndpoint] = useState(null);
  const [codeSnippet, setCodeSnippet] = useState(null);
  const [websiteSnippet, setWebsiteSnippet] = useState(null);
  const [figmaSnippet, setFigmaSnippet] = useState(null);

  useEffect(() => {
    import('../../api/homeDemo').then((module) => setApiEndpoint(module.homeDemo()));
  }, []);

  useEffect(() => {
    let isMounted = true;

    sanityClient.fetch(apiEndpoint).then((res) => {
      if (isMounted && res !== null) {
        setCodeSnippet(res.snippet_1);
        setWebsiteSnippet(res.snippet_2);
        setFigmaSnippet(res.snippet_3);
      }
    });

    return () => (isMounted = false);
  }, [apiEndpoint]);

  return [codeSnippet, websiteSnippet, figmaSnippet];
};

export default useFetchHomepageDemo;
