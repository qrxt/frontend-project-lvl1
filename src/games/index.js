import readLine from 'readline-sync';

import gameCalc from './calc.js';
import gameIsNumberEven from './is-number-even.js';
import gameGreatestCommonDivisor from './greatest-common-divisor.js';
import gameProgression from './progression.js';
import gameIsNumberPrime from './is-number-prime.js';

const games = {
  calc: gameCalc,
  isNumberEven: gameIsNumberEven, //
  greatestCommonDivisor: gameGreatestCommonDivisor,
  progression: gameProgression,
  isNumberPrime: gameIsNumberPrime,
};

export { games };

export default (game, rounds = 3) => {
  // but what about cli.js?
  console.log('Welcome to the Brain Games!');
  const userName = readLine.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (questionsQuantity) => {
    if (questionsQuantity > rounds) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }

    const { introQuestion, question, correctAnswer } = game();

    console.log(introQuestion);
    console.log(`Question: ${question}`);
    const userAnswer = readLine.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');

      return iter(questionsQuantity + 1);
    }

    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  };

  return iter(1);
};
