import readLine from 'readline-sync';

import isEven from '../utils/is-even.js';
import getRandomInt from '../utils/get-random-int.js';

export default (userName, roundsQuantity = 3) => {
  const questionsQuantity = roundsQuantity;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const iter = (questionCounter) => {
    if (questionCounter > questionsQuantity) {
      console.log(`Congratulations, ${userName}!`);

      return false;
    }

    const randomInt = getRandomInt(1, 100);

    console.log(`Question: ${randomInt}`);

    const userInput = readLine.question('Your answer: ');
    const correctAnswer = isEven(randomInt)
      ? 'yes'
      : 'no';

    if (userInput === correctAnswer) {
      console.log('Correct!');

      return iter(questionCounter + 1);
    }

    console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    return false;
  };

  return iter(1);
};
