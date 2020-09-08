import getRandomInt from './get-random-int.js';

export default (array) => (
  array[getRandomInt(0, array.length - 1)]
);
