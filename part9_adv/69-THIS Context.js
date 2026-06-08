const person = {
    name: "Aman",
    greet() {
        console.log(`I am ${this.name}`);
        
    },
};

person.greet();

const greetFunction = person.greet;
greetFunction();


const boundGreet = person.greet.bind({ name: "Anand" });
boundGreet();
