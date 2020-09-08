import readLine from 'readline-sync';

export default (introQuestion, rounds, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLine.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(introQuestion);

  let questionsCounter;

  for (questionsCounter = 0; questionsCounter < rounds; questionsCounter += 1) {
    const { question, correctAnswer } = getGameData();

    console.log(`Question: ${question}`);
    const userAnswer = readLine.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
