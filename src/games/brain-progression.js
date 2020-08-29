import getRandomInt from '../utils/get-random-int.js';
import generateProgression from '../utils/generate-arithmetic-progression.js';

export default () => {
  const progression = generateProgression(getRandomInt(1, 10), getRandomInt(1, 4), 10);
  const progressionIndexToRemove = getRandomInt(0, progression.length - 1);
  const progressionWithMissingElement = progression
    .map((elem, idx) => (
      idx === progressionIndexToRemove ? '..' : elem
    ))
    .join(' ');

  const correctAnswer = String(progression[progressionIndexToRemove]);

  return {
    introQuestion: 'What number is missing in the progression?',
    question: progressionWithMissingElement,
    correctAnswer,
  };
};
