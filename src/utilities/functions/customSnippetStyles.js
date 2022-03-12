export function modifySnippet(title) {
  if (title === 'code') return 'w-[438px] h-[360px] object-cover object-left';
  if (title === 'figma') return 'w-[438px] h-[360px] object-cover object-left';
  if (title === 'website') return 'w-[600px] h-[360px] object-cover';
}
