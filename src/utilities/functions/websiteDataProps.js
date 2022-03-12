import { generateBgColor as bg } from './generateBgColor';

export function websiteDataProps(index, title, trailer, slug) {
  return { bgColor: bg(index), title, description: trailer, slug };
}
