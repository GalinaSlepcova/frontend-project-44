var readlineSync = import('readline-sync');
export const userName = () => {
  process.stdin.isTTY = process.stdout.isTTY = true;
  var question = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + question + '!');
  };