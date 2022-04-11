import { createClassString } from '../../utilities/functions/createClassString';

export const divWrapper = createClassString({
  width: 'w-full',
  padding: 'p-5 lg:p-10',
  boxShadow: 'shadow-regular',
  border: 'rounded-md',
});

export const heading = createClassString({
  width: 'w-9/12 lg:w-full',
  margin: 'mx-auto',
  textAlign: 'text-center lg:text-left',
  textTransform: 'capitalize',
});
