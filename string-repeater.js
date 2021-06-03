// import prompt-sync
const prompt = require('prompt-sync')();

//get input from user

let n = prompt('Enter a string:');

//store input

let pyramid = '';

//display input in pyramid

for(pyramid.length=0; pyramid.length<=10 ; pyramid+= n){
    console.log(pyramid);
}