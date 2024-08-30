// 1 - campos em classe
class User {
  name!: string
  age!: number
}

const felipe = new User()

console.log(felipe)

felipe.name = "Felipe"
// felipe.job = "Programmer"

console.log(felipe)

// 2 - constructor
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const luis = new NewUser("Luis", 24)

console.log(luis)

// const pamela = new NewUser("Pamela")
// const pamela = new NewUser(20, 20)