import getRandomInt from '../utils/get-random-int.js';
import generateProgression from '../utils/generate-arithmetic-progression.js';

export default () => {
  const lengthOfProgression = 10;
  const progression = generateProgression(lengthOfProgression);
  const progressionIndexToRemove = getRandomInt(0, progression.length);
  const progressionWithMissingElement = progression
    .map((elem, idx) => (
      idx === progressionIndexToRemove
        ? '..'
        : elem
    ))
    .join(' ');

  const correctAnswer = String(progression[progressionIndexToRemove]);

  return {
    introQuestion: 'What number is missing in the progression?',
    question: progressionWithMissingElement,
    correctAnswer,
  };
};
