// // import prompt-sync
// const prompt = require('prompt-sync')();

// //get input from user

// let n = prompt('Enter a string:');

// //store input

// let pyramid = '';

// //display input in pyramid

// for(pyramid.length=0; pyramid.length<=10 ; pyramid+= n){
//     console.log(pyramid);
// }

//import promt-sync
const prompt = require('prompt-sync')();

//get string from user
let n = prompt("Enter a string:  ");

//store string
let pyramid = n;
let count = 0;

//display function
while (n.length < 10) { //max string length
    console.log(n);
    n = n + pyramid; //add + repeat strings
    count ++; // display in column 
}