import getRandomInt from '../utils/get-random-int.js';

import runGame from './index.js';

const isEven = (number) => number % 2 === 0;

const introQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundsQuantity = 3;
const getEvenGameData = () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber,
    correctAnswer,
  };
};

export default () => runGame(introQuestion, roundsQuantity, getEvenGameData);
