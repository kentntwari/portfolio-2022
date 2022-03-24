export function createClassString(obj) {
  if (!obj) console.warn('object missing');

  if (typeof obj !== 'object') console.warn('object is not of type object');

  return [...Object.values(obj)].join(' ');
}
