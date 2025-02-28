import readlineSync from 'readline-sync';
export const isEven = (number) => {
    var level = readlineSync.number(number % 2 === 0);
    console.log(level);
} ;
