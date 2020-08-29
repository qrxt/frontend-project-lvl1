import findGCD from '../utils/find-gcd.js';
import getRandomInt from '../utils/get-random-int.js';

export default () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const correctAnswer = String(findGCD(firstNumber, secondNumber));

  return {
    introQuestion: 'Find the greatest common divisor of given numbers.',
    question: `${firstNumber} ${secondNumber}`,
    correctAnswer,
  };
};
