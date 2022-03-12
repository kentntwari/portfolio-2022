import { useState, useEffect } from 'react';

import sanityClient from '../../client';

const useFetchBackground = () => {
  const [apiEndpoint, setApiEndpoint] = useState(null);
  const [bio, setBio] = useState(null);
  const [firstFact, setFirstFact] = useState(null);
  const [secondFact, setSecondFact] = useState(null);
  const [thirdFact, setThirdFact] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [FAQ, setFAQ] = useState({});

  useEffect(() => {
    import('../../api/background').then((module) => setApiEndpoint(module.background));
  }, []);

  useEffect(() => {
    let isMounted = true;

    sanityClient.fetch(apiEndpoint).then((res) => {
      if (isMounted && res !== null) {
        setBio(res.bio);
        setFirstFact(res.fact_one);
        setSecondFact(res.fact_two);
        setThirdFact(res.fact_three);
        setProfileImage(res.image);
        setFAQ(res.questions);
      }

      return () => (isMounted = false);
    });
  }, [apiEndpoint]);

  return {
    bio,
    facts: [firstFact, secondFact, thirdFact],
    profileImage,
    FAQ: Object.entries(FAQ),
  };
};

export default useFetchBackground;
