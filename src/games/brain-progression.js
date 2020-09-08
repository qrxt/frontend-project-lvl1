import getRandomInt from '../utils/get-random-int.js';

import runGame from '../engine.js';

const generateProgression = (offset, multiplier, length) => Array
  .from({ length }, (_, idx) => offset + idx * multiplier);

const introQuestion = 'What number is missing in the progression?';
const roundsQuantity = 3;
const getProgressionGameData = () => {
  const offset = getRandomInt(1, 10);
  const multiplier = getRandomInt(1, 4);
  const progressionLength = 10;
  const progression = generateProgression(offset, multiplier, progressionLength);
  const progressionIndexToRemove = getRandomInt(0, progression.length - 1);
  const progressionWithMissingElement = progression
    .map((elem, idx) => (
      idx === progressionIndexToRemove ? '..' : elem
    ))
    .join(' ');

  const correctAnswer = String(progression[progressionIndexToRemove]);

  return {
    question: progressionWithMissingElement,
    correctAnswer,
  };
};

export default () => runGame(introQuestion, roundsQuantity, getProgressionGameData);
