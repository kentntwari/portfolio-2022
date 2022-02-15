const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'hniiaphy',
  dataset: 'production',
  apiVersion: '2022-02-11',
  // token: 'sanity-auth-token',
  useCdn: true,
});

export default client;
