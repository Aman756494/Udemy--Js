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