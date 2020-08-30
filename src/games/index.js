import readLine from 'readline-sync';

import gameCalc from './brain-calc.js';
import gameIsNumberEven from './brain-even.js';
import gameGreatestCommonDivisor from './brain-gcd.js';
import gameProgression from './brain-progression.js';
import gameIsNumberPrime from './brain-prime.js';

export {
  gameCalc,
  gameIsNumberEven,
  gameGreatestCommonDivisor,
  gameProgression,
  gameIsNumberPrime,
};

export default (runGame, rounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLine.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let questionsCounter;

  for (questionsCounter = 0; questionsCounter < rounds; questionsCounter += 1) {
    const { introQuestion, question, correctAnswer } = runGame();

    if (questionsCounter === 1) {
      console.log(introQuestion);
    }

    console.log(`Question: ${question}`);
    const userAnswer = readLine.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);

      break;
    }
  }

  if (questionsCounter === rounds) {
    console.log(`Congratulations, ${userName}!`);
  }

  return null;
};
