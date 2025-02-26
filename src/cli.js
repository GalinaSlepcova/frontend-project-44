var readlineSync = import('readline-sync');
export const userName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
  };