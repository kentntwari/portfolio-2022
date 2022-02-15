export function background() {
  return `
  *[_type=='about_me']{
  bio,
  'fact_one': facts.fact_one{
  description,
 'icon':icon.asset->url
},
  'fact_two': facts.fact_two{
  description,
 'icon':icon.asset->url
},
  'fact_three': facts.fact_three{
  description,
 'icon':icon.asset->url
},
  name,
  'image':profile_image.asset->url,
  questions
}[0]
  `;
}
