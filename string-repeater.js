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


const prompt = require('prompt-sync')();
let n = prompt("Enter a string:  ");
let pyramid = n;
let count = 0;
while (n.length < 10) {
    console.log(n);
    n = n + pyramid;
    count ++;
}