import readLine from 'readline-sync';

import getRandomInt from '../utils/get-random-int.js';
import getRandomFromArr from '../utils/get-random-from-arr.js';

const add = (left, right) => left + right;
const sub = (left, right) => left - right;
const multiply = (left, right) => left * right;

export default (userName) => {
  const questionsQuantity = 3;
  const operators = {
    '+': add,
    '-': sub,
    '*': multiply,
  };
  const operatorSymbols = Object.keys(operators);

  console.log('What is the result of the expression?');

  const iter = (questionCounter) => {
    if (questionCounter > questionsQuantity) {
      console.log(`Congratulations, ${userName}!`);

      return false;
    }

    const operator = getRandomFromArr(operatorSymbols);
    const leftOperand = operator === '*'
      ? getRandomInt(1, 10)
      : getRandomInt(1, 100);
    const rightOperand = operator === '*'
      ? getRandomInt(1, 10)
      : getRandomInt(1, 100);

    console.log(`Question: ${leftOperand} ${operator} ${rightOperand}`);

    const userInput = readLine.question('Your answer: ');
    const operation = operators[operator];
    const correctAnswer = operation(leftOperand, rightOperand);

    if (Number(userInput) === correctAnswer) {
      console.log('Correct!');

      return iter(questionCounter + 1);
    }

    console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    return false;
  };

  return iter(1);
};
