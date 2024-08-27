"use strict";
// 1 - void
function withoutReturn() {
    console.log("Está função não tem retorno!");
    // return 1
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Felipe");
preGreeting(greeting, "Luis");
// 3 - generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
// console.log(firstElement("Teste"))
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Felipe" }, { age: 30, job: "Programmer" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
// console.log(biggestNumber(false, true))
// console.log(biggestNumber("5", 6))
