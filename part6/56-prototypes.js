let computer = { cpu: 13 };
let lenevo = {
    screen: "HD",
    __proto__: computer,
};
let tomHardware = {};

console.log(` computer `, lenevo.__proto__);  

let genericCar = { tyres: 4 };

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar);

console.log(` Tesla `, tesla , Object.getPrototypeOf(tesla));