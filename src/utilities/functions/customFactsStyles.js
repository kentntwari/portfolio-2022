const width = {
  factOne: 'md:w-[330px] lg:w-[341px]',
  factTwo: 'md:w-[245px] lg:w-[403px]',
  factThree: 'md:w-[245px] lg:w-[417px]',
};

const onAxisX = {
  factOne: 'md:-right-80 lg:-right-20 xl:-right-16 3xl:-right-48',
  factTwo: 'md:-left-16 lg:left-16 xl:left-5 3xl:left-48',
  factThree:
    'md:-right-[27rem] lg:-right-[31.25rem] xl:-right-[53rem] 3xl:-right-[44rem]',
};

const onAxisY = {
  factOne: 'md:top-12 lg:-top-12 xl:top-20',
  factTwo: 'md:-bottom-28 lg:-bottom-20 xl:-bottom-72 md:-bottom-16',
  factThree: 'md:bottom-52 lg:bottom-36 xl:bottom-40 3xl:-bottom-16',
};

export function applyCustomStyles(data) {
  if (!data) return;

  if (data.includes('city'))
    return `${width.factOne} ${onAxisX.factOne} ${onAxisY.factOne}`;

  if (data.includes('user interfaces'))
    return `${width.factTwo} ${onAxisX.factTwo} ${onAxisY.factTwo}`;

  if (data.includes('React developer'))
    return `${width.factThree} ${onAxisX.factThree} ${onAxisY.factThree}`;
}
