import getRandomInt from '../utils/get-random-int.js';

import runGame from '../engine.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  const iter = (counter) => {
    if (counter === number) {
      return true;
    }

    return number % counter === 0
      ? false
      : iter(counter + 1);
  };

  return iter(2);
};

const introQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getPrimeGameData = () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber,
    correctAnswer,
  };
};

export default () => runGame(introQuestion, getPrimeGameData);
