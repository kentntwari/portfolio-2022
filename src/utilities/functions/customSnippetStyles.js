import { parent_styles } from '../../styles/blocks/demoItem';

export function generateParentStyles(title) {
  if (title === 'code') return parent_styles.code;
  if (title === 'figma') return parent_styles.figma;
  if (title === 'website') return parent_styles.website;
}

export function modifySnippet(title) {
  if (title === 'code') return 'w-[438px] h-[360px] object-cover object-left';
  if (title === 'figma') return 'w-[438px] h-[360px] object-cover object-left';
  if (title === 'website') return 'w-[600px] h-[360px] object-cover';
}
