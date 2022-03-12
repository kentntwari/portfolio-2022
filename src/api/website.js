export function website(slug) {
  return `*[_type=='website' && slug.current=='${slug}'][0]{
    'challenges':challenges[0].children[0].text,
    features,
    summary,
    title,
    trailer
  }`;
}
