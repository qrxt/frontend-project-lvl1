#!/usr/bin/env node

import readLine from 'readline-sync';

import gameIsNumberEven from '../src/games/is-number-even.js';

// export default () => {
console.log('Welcome to the Brain Games!');
const userName = readLine.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

gameIsNumberEven(userName);
// };
