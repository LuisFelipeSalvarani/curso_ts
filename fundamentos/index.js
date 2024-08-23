"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.584848;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
const firstName = "Felipe";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Salvarani";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
const ann = "Teste";
let inf = "Teste";
// ann = 1
// inf = 1
// 5 - Desafio 2
const number = 575;
const numberToString = number.toString();
const printMyNumber = `O meu número é ${numberToString}`;
console.log(printMyNumber);
