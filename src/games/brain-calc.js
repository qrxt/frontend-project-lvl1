import getRandomInt from '../utils/get-random-int.js';
import getRandomFromArr from '../utils/get-random-from-arr.js';

const add = (left, right) => left + right;
const sub = (left, right) => left - right;
const multiply = (left, right) => left * right;

export default () => {
  const operators = {
    '+': add,
    '-': sub,
    '*': multiply,
  };
  const operatorSymbols = Object.keys(operators);

  const operator = getRandomFromArr(operatorSymbols);
  const randomMax = operator === '*' ? 10 : 100;
  const leftOperand = getRandomInt(1, randomMax);
  const rightOperand = getRandomInt(1, randomMax);
  const operation = operators[operator];
  const correctAnswer = String(operation(leftOperand, rightOperand));

  return {
    introQuestion: 'What is the result of the expression?',
    question: `${leftOperand} ${operator} ${rightOperand}`,
    correctAnswer,
  };
};
