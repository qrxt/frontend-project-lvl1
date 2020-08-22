import getRandomInt from './get-random-int.js';

export default (length) => {
  const offset = getRandomInt(1, 10);
  const multiplier = getRandomInt(1, 4);

  return new Array(length)
    .fill(null)
    .map((_, idx) => offset + idx * multiplier);
};
