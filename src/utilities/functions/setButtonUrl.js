export function setButtonUrl(slug) {
  return {
    url: `/works/${slug}`,
    modifyClasses: { remove: 'px-10', add: ['px-[40px]', 'm-auto'] },
  };
}
