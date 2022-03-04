export function websiteDataProps(index, title, trailer, slug) {
  function evaluateBg(number) {
    if (number % 2 === 0) return 'bg-white-full';

    if (number % 2 !== 0) return 'bg-white-site';
  }

  return { bgColor: evaluateBg(index), title, description: trailer, slug };
}
