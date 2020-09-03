import getRandomInt from '../utils/get-random-int.js';

import runGame from './index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  const iter = (acc) => {
    if (acc === number) {
      return true;
    }

    return number % acc === 0
      ? false
      : iter(acc + 1);
  };

  return iter(2);
};

const introQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const roundsQuantity = 3;
const getPrimeGameData = () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber,
    correctAnswer,
  };
};

export default () => runGame(introQuestion, roundsQuantity, getPrimeGameData);
