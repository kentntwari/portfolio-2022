import { createClassString } from './createClassString';

const code_styles = createClassString({
  top: '-top-36 lg:-top-52 2xl:-top-[12.5rem]',
  left: '-left-32 xl:-left-72 2xl:-left-48',
});

const figma_styles = createClassString({
  top: '-top-[8.25rem] 2xl:-top-44',
  left: '-left-[20.5rem]',
});

const website_styles = createClassString({
  top: 'lg:top-24 2xl:top-[11.5rem]',
  left: '-left-[20.5rem] 2xl:-left-[25.5rem]',
});

export function cardTextClass(title) {
  if (title === 'code') return code_styles;
  if (title === 'figma') return figma_styles;
  if (title === 'website') return website_styles;
}
