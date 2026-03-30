/*
1.Write a function named `makeTea` that takes one parameter, 'typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`.
 Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("Lemon tea");
console.log(teaOrder);
/*
Create a function nameed `orderTea` that takes one parameter, 'teaType`. Inside this funtion,create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`.
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaOrder) {
    function confirmOrder() {
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}

let orderConfirmation = orderTea();
console.log(orderConfirmation);

/*
3.Write an arrow function named `calculateTotal` that takes parameters: `pricd` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
 Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price ,  quantity) => {
    return price * quantity;
}
// const calculateTotal = (price, quantity) => price * quantity;  -> Can also be written like this.

let totalCost = calculateTotal(499, 100);
console.log(totalCost); 