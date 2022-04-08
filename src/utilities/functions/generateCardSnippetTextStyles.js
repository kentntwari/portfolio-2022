import {
  code_card_styles,
  figma_card_styles,
  website_card_styles,
} from '../../styles/blocks/styles.demoItem';

export function cardTextClass(title) {
  if (title === 'code') return code_card_styles;
  if (title === 'figma') return figma_card_styles;
  if (title === 'website') return website_card_styles;
}
