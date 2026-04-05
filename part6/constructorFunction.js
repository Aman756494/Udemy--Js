function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Hilux");
console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);

function Tea(types) {
  this.types = types;
  this.describe = function () {
    return `this is a cup of ${this.types}`;
  };
}
let lemonTea = new Tea("lemon tea.");
console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());

function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be callled with new keyword");
    }
    this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");