import readLine from 'readline-sync';

import isPrime from '../utils/is-prime.js';
import getRandomInt from '../utils/get-random-int.js';

export default (userName, roundsQuantity = 3) => {
  const questionsQuantity = roundsQuantity;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const iter = (questionCounter) => {
    if (questionCounter > questionsQuantity) {
      console.log(`Congratulations, ${userName}!`);

      return false;
    }

    const randomInt = getRandomInt(1, 100);

    console.log(`Question: ${randomInt}`);

    const userInput = readLine.question('Your answer: ');
    const correctAnswer = isPrime(randomInt)
      ? 'yes'
      : 'no';

    if (userInput === correctAnswer) {
      console.log('Correct!');

      return iter(questionCounter + 1);
    }

    console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}`);
    return false;
  };

  return iter(1);
};
