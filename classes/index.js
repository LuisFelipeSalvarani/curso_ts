"use strict";
// 1 - campos em classe
class User {
}
const felipe = new User();
console.log(felipe);
felipe.name = "Felipe";
// felipe.job = "Programmer"
console.log(felipe);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const luis = new NewUser("Luis", 24);
console.log(luis);
// const pamela = new NewUser("Pamela")
// const pamela = new NewUser(20, 20)
