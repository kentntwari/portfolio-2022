export function generateBgColor(number) {
  if (number % 2 === 0) return 'bg-white-full';

  if (number % 2 !== 0) return 'bg-white-site';
}
