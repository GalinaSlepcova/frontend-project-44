import readlineSync from 'readline-sync';
console.log("Welcome to the Brain Games!");

export const userName = () => {
  var question = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + question + '!');
  };

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
    if (answer1  || answer2) {
        console.log('Correct!');
      } else {
        const wrongAnswer = `"${gameUser}" is wrong answer ;(. Correct answer was ';('.`;
        console.log(wrongAnswer);
        return wrongAnswer;
      };
    };
};
