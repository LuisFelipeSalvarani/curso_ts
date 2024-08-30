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

// 3 - campos readonly
class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car("Fusca")

console.log(fusca)

console.log(fusca.wheels)

fusca.name = "Fusca Turbo"

// fusca.wheels = 5

// 4 - herança e super
class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

const trator =  new Machine("Trator")

class KillerMachine extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)