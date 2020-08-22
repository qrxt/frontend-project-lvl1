import readLine from 'readline-sync';

import getRandomInt from '../utils/get-random-int.js';
import generateProgression from '../utils/generate-arithmetic-progression.js';

export default (userName, roundsQuantity = 3) => {
  const questionsQuantity = roundsQuantity;
  const lengthOfProgression = 10;
  console.log('What number is missing in the progression?');

  const iter = (questionCounter) => {
    if (questionCounter > questionsQuantity) {
      console.log(`Congratulations, ${userName}!`);

      return false;
    }

    const progression = generateProgression(lengthOfProgression);
    const progressionIndexToRemove = getRandomInt(0, progression.length);
    const progressionWithMissingElement = progression
      .map((elem, idx) => (
        idx === progressionIndexToRemove
          ? '..'
          : elem
      ))
      .join(' ');

    console.log(`Question: ${progressionWithMissingElement}`);

    const correctAnswer = progression[progressionIndexToRemove];

    const userInput = readLine.question('Your answer: ');

    if (Number(userInput) === correctAnswer) {
      console.log('Correct!');

      return iter(questionCounter + 1);
    }

    console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}`);
    return false;
  };

  return iter(1);
};
