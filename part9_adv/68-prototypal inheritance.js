function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`hello , my name is ${this.name}`);
    
}

let aman = new Person("Aman");
aman.greet();