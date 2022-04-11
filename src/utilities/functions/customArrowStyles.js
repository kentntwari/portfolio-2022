import { arrow_styles } from '../../styles/blocks/demoItem';

export function arrowCustomStyles(title) {
  if (title === 'code') return arrow_styles.code;
  if (title === 'figma') return arrow_styles.figma;
  if (title === 'website') return arrow_styles.website;
}
