//Checking if a number is greater than another number:

let num1 = 5;
let num2 = 8;
console.log("I am a regular upper code");

if (num1 > num2) {
    console.log("num1 is greater than num2");
} else {
    console.log("Nope! num1 is not greater than num2");
}
console.log("I am a regular bottom code");

//Checking if a string is equal to another string:

let username = 'hello';
let anotherUsername = 'hello';

if (username == anotherUsername) {
    console.log("pick another username");
} else {
    console.log('Available usernname');
}

//checking if a variable is a number or not:

let score = 44;

if (typeof score === 'number') {
    console.log('yea it is a no. ');
} else {
    console.log('it is not a number');
}

//checking if a boolean value is true or false;

let isTeaReady = false;

if (isTeaReady) {
    console.log('Tea is ready');
} else {
    console.log('Tea is not ready');
}

//checking if an array is empty or not.

let items = [];
console.log(items.length);
if (items.length === 0) {
    console.log('Array is empty')
} else {
    console.log('Array is not empty');
}