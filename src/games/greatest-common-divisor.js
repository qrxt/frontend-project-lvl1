import readLine from 'readline-sync';

import findGCD from '../utils/find-gcd.js';
import getRandomInt from '../utils/get-random-int.js';

export default (userName, roundsQuantity = 3) => {
  const questionsQuantity = roundsQuantity;
  console.log('Find the greatest common divisor of given numbers.');

  const iter = (questionCounter) => {
    if (questionCounter > questionsQuantity) {
      console.log(`Congratulations, ${userName}!`);

      return false;
    }

    const randomIntFirst = getRandomInt(1, 100);
    const randomIntSecond = getRandomInt(1, 100);

    console.log(`Question: ${randomIntFirst} ${randomIntSecond}`);

    const correctAnswer = findGCD(randomIntFirst, randomIntSecond);

    const userInput = readLine.question('Your answer: ');

    if (Number(userInput) === correctAnswer) {
      console.log('Correct!');

      return iter(questionCounter + 1);
    }

    console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}`);
    return false;
  };

  return iter(1);
};
