let username = {
    firstname: "Aman",
    isLoggedin: true,
    "middle name" : 'Kumar',
};

username.firstname = "Mr. A";
username.lastname = "Pandey";

console.log(username.firstname);
console.log(username.lastname);
console.log(username["middle name"]);
console.log(username)
console.log(typeof username);

let today = new Date();
console.log(today.getDate());
console.log(today.getDay());

//Array
let heroes = ["a", "b", "c", true];
let anotherUser = ["Aman", true]
console.log(anotherUser[0]);

let isValue = "2abc";
console.log(typeof Number(isValue));
console.log(Number(undefined));
console.log(Number(null));