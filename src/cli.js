import readlineSync from 'readline-sync';
export const userName = () => {
  var question = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + question + '!');
  };
