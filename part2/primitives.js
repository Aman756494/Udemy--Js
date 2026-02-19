//Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance);
console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

//boolean

let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

console.log(isActive);
console.log(isReallyActive);

// null and undefinded
let firstname;
console.log(firstname);
// console.log(lastname); //undefined

//null & undefined
let username = null;
console.log(username);

let lastname = undefined;
console.log(lastname);

//string
let myString = "hello";
let myString1 = 'Hola';
let username2 = 'aman'

let oldGreet = myString + " " + "aman";
console.log(oldGreet);

let greetMessage = `hello ${username2} !`;
let demoOne = `Value is ${2 * 4}`;
console.log(demoOne);
console.log(greetMessage);

//symbol
let sm1 = Symbol("aman");
let sm2 = Symbol("aman");
console.log(sm1 == sm2);
console.log(sm1);