export function websites() {
  return `
  *[_type=='website'] | order(_createdAt asc){
  title,
  trailer
}`;
}
