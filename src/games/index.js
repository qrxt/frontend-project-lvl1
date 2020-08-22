import readLine from 'readline-sync';

import gameCalc from './calc.js';
import gameIsNumberEven from './is-number-even.js';
import gameGreatestCommonDivisor from './greatest-common-divisor.js';
import gameProgression from './progression.js';

const games = {
  calc: gameCalc,
  isNumberEven: gameIsNumberEven,
  greatestCommonDivisor: gameGreatestCommonDivisor,
  progression: gameProgression,
};

export { games };

export default (game, rounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLine.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  game(userName, rounds);
};
