let car = {
  make: "Toyota",
  model: "Hilux",
  year: 2020,

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Cena", 50);
console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.aman = function () {
  return `Custom Method ${this}`;
};

let myArray = [1, 2, 3, 4];
console.log(myArray.aman());

let myNewArray = [1, 2, 3, 4,5,6,7];
console.log(myNewArray.aman());

class Vehicle{
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`;
    }
}
 
let mycar = new Car("BMW", "M5 CS");
// console.log(mycar.start());
// console.log(mycar.drive());

let vehOne = new Vehicle("BMW", "M5 CS");
console.log(vehOne.make);

//Encapsulation
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance 
  } 

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance());

//Abstraction

class coffeeMachine {
  start() {
    return `Starting the macine...`
  }

  brewCoffee() {
    //complex calculations
    return `Brewing Coffee`
  }
  
  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne} + ${msgTwo}`; 
  }
}

let myMachine = new coffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

//Polymorphism

class Bird{
  fly() {
    return `Flying...`
  }

}

class Penguin extends  Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguins = new Penguin();
console.log(bird.fly());
console.log(penguins.fly());

// static Method
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(3, 5)); -> It can't be accessed like this

console.log(Calculator.add(5, 6));    

// Getters and setters
class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
    throw new Error("Salary can't be negative");
    
  }

    this.name = name;
    this.#salary = salary;
  }
  
  get salary() {
    return `You are not allowed to see the salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this._salary = value;
    }
  }

}

let emp = new Employee("Alice", -60000);
console.log(emp._salary);
// emp.salary = -60000;
