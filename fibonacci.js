// import prompt-sync

const prompt = require('prompt-sync')();

//get input from user

let n = prompt('Enter a value for "n":');

// store inputs
let count = Number(n);
let i = 0;
let start= 0;
let next = 1;
let end=0;

//display inputs to user in a finonacci order

while(i < count){
    console.log(start);
    end= start + next; 
    start = next;
    next= end;
    i++;
}



