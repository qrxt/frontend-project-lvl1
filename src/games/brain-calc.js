import getRandomInt from '../utils/get-random-int.js';
import getRandomFromArr from '../utils/get-random-from-arr.js';

import runGame from './index.js';

const add = (left, right) => left + right;
const sub = (left, right) => left - right;
const multiply = (left, right) => left * right;

const introQuestion = 'What is the result of the expression?';
const roundsQuantity = 3;
const getGcdGameData = () => {
  const operations = {
    '+': add,
    '-': sub,
    '*': multiply,
  };
  const operators = Object.keys(operations);

  const operator = getRandomFromArr(operators);
  const randomMax = operator === '*' ? 10 : 100;
  const leftOperand = getRandomInt(1, randomMax);
  const rightOperand = getRandomInt(1, randomMax);
  const operation = operations[operator];
  const correctAnswer = String(operation(leftOperand, rightOperand));

  return {
    question: `${leftOperand} ${operator} ${rightOperand}`,
    correctAnswer,
  };
};

export default () => runGame(introQuestion, roundsQuantity, getGcdGameData);
