export function positionFactIcon(windowWidth, element) {
  if (!windowWidth) return;

  if (!element) return;

  if (windowWidth && element.includes('city')) return '-top-[60px] -left-5';

  if (windowWidth && element.includes('user interfaces')) return '-bottom-9 -right-5';

  if (windowWidth && element.includes('React developer')) return '-bottom-9 -right-px';
}
