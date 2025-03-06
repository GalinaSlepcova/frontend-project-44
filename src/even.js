import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
 const question = readlineSync.question('May I have your name? ');
 const GamerName = question;
 export const userName = () => {
    console.log(`Hello, ${GamerName}!`);
 }

  const theRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

export const isEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i+=1){
        const number = theRandom(35);
        console.log('Question: ', number);
        const gameUser = readlineSync.question('Your answer: ');
     
        const answer1 = (number % 2 === 0) && (gameUser === 'yes');
        const answer2 = (number % 2 !== 0) && (gameUser === 'no');
    if (answer1 === true || answer2 === true) {
        console.log('Correct!');
      } else {
        const assumption = (gameUser === 'yes' ? 'no' : 'yes');
        const errorMessage = `"${gameUser}" is wrong answer ;(. Correct answer was '${assumption}'. /n Let's try again, ${userName}!`;
        return errorMessage;
      }
      console.log(`Congratulations, ${userName}!`);
    }
};
