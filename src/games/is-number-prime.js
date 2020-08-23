import isPrime from '../utils/is-prime.js';
import getRandomInt from '../utils/get-random-int.js';

export default () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isPrime(randomNumber)
    ? 'yes'
    : 'no';

  return {
    introQuestion: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    question: randomNumber,
    correctAnswer,
  };
};
