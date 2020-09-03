import getRandomInt from '../utils/get-random-int.js';

import runGame from './index.js';

const isCommonDivisor = (first, second, divisor) => (
  first % divisor === 0 && second % divisor === 0
);

const findGcd = (first, second) => {
  const iter = (acc) => {
    if (isCommonDivisor(first, second, acc)) {
      return acc;
    }

    return iter(acc - 1);
  };

  return iter(Math.max(first, second));
};

const introQuestion = 'Find the greatest common divisor of given numbers.';
const roundsQuantity = 3;
const getGcdGameData = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const correctAnswer = String(findGcd(firstNumber, secondNumber));

  return {
    question: `${firstNumber} ${secondNumber}`,
    correctAnswer,
  };
};

export default () => runGame(introQuestion, roundsQuantity, getGcdGameData);
