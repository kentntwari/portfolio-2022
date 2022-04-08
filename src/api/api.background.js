export function background() {
  return `
  *[_type=='about_me']{
  bio,
   'facts': [
     facts.fact_one{description,'icon':icon.asset->url},
     facts.fact_two{description,'icon':icon.asset->url},
     facts.fact_three{ description,'icon':icon.asset->url}
   ],
  name,
  'image':profile_image.asset->url,
  questions
}[0]
  `;
}
