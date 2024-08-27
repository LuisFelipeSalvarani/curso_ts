"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });
function showUserDatails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = {
    email: "felipe@email.com",
    role: "Admin"
};
const u2 = { email: "julia@email.com" };
showUserDatails(u1);
showUserDatails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
// fusca.wheels = 5
