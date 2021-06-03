// import prompt-sync

const prompt = require('prompt-sync')();

//get input from user

let n = prompt('Enter a value for "n":');

// store inputs

let count = Number(n);

//doubles the users input until the input is greater || or = to 100

while(count <= 100){
    console.log(count + "");
    count *=2;
}
console.log(count);