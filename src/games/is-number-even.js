import isEven from '../utils/is-even.js';
import getRandomInt from '../utils/get-random-int.js';

export default () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isEven(randomNumber)
    ? 'yes'
    : 'no';

  return {
    introQuestion: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: randomNumber,
    correctAnswer,
  };
};
