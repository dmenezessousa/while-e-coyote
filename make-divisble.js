const prompt = require('prompt-sync')();

let x = Number(prompt('Enter x:'));
let y = Number(prompt('Enter y:'));


while(x % y !== 0){
    console.log(x);

    x = x + 1;
}
console.log(x, 'is divisible by ', y);