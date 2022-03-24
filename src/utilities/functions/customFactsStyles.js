import { createClassString } from './createClassString';

const factOne = createClassString({
  width: 'md:w-[330px] lg:w-[341px]',
  right: 'md:-right-80 lg:-right-20 xl:-right-16 3xl:-right-48',
  top: 'md:top-12 lg:-top-12 xl:top-20',
});

const factTwo = createClassString({
  width: 'md:w-[245px] lg:w-[403px]',
  left: 'md:-left-16 lg:left-16 xl:left-5 3xl:left-48',
  bottom: 'md:-bottom-28 lg:-bottom-20 xl:-bottom-72 md:-bottom-16',
});

const factThree = createClassString({
  width: 'md:w-[245px] lg:w-[417px]',
  right: 'md:-right-[27rem] lg:-right-[31.25rem] xl:-right-[53rem] 3xl:-right-[44rem]',
  bottom: 'md:bottom-52 lg:bottom-36 xl:bottom-40 3xl:-bottom-16',
});

export function applyCustomStyles(data) {
  if (!data) return;

  if (data.includes('city')) return factOne;

  if (data.includes('user interfaces')) return factTwo;

  if (data.includes('React developer')) return factThree;
}
