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

// 5 - métodos
class Dwarf {
  name

  constructor(name: string) {
    this.name = name
  }

  greeting() {
    console.log("Hey Stranger!")
  }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy.name)

jimmy.greeting()

console.log(jimmy)

// 6 - this
class Truck {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
  }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)

volvo.showDetails()
scania.showDetails()

// 7 - getters
class Person {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get fullName() {
    return `${this.name} ${this.surname}`
  }
}

const felipeSalvarani = new Person("Felipe", "Salvarani")

console.log(felipeSalvarani.name)

console.log(felipeSalvarani.fullName)