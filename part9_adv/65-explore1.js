function sayHello() {
    console.log("Example of Asynchronous Nauture,executed 3 sec after running")
}

setTimeout(() => {
    sayHello();
}, 3000);

console.log("hello");
for (let i = 0; i < 10; i++) {
    console.log(i);
}