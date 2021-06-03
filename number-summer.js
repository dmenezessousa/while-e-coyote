// import prompt-sync

const prompt = require('prompt-sync')();

//get input from user

let number = prompt('Enter some numbers (type "done" when complete):');

//store inputs

let count = true;
let num = Number(number);
let total = 0;

//display inputs from user and add all.
while(count === true){
    total += num;  //add inputs
    console.log(num);
    number = prompt('Enter some numbers (type "done" when complete):');
    if(number === 'done'){ //stop asking for input when user type 'done;
        count = false;
        console.log('The total is: ', total); //display the total sum of inputs
    }
    else{
        num = Number(number); //keep asking for input
    }
    
}



