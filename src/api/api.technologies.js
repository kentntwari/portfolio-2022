export function technologies() {
  return `*[_type=='tech'] | order(_createdAt asc){
   "logo": logo.asset-> url,
   "tech":slug.current
}`;
}
