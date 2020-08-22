import readLine from 'readline-sync';

import gameCalc from './calc.js';
import gameIsNumberEven from './is-number-even.js';

const games = {
  calc: gameCalc,
  'is-number-even': gameIsNumberEven,
};

export default (gameName, rounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLine.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  games[gameName](userName, rounds);
};
