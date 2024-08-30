// 1 - exemplo decorator
function myDecorator() {
  console.log("Iniciando decorator!")
  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log("Executando decorator")
    console.log(target)
    console.log(propertKey)
    console.log(descriptor)
  }
}

class myClass {
  @myDecorator()
  testing() {
    console.log("terminando execução do método")
  }
}

const myObj = new myClass()

myObj.testing()

// 2 - múltiplos decorators
function a() {
  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log("executou a.")
  }
}

function b() {
  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log("executou b.")
  }
}

function c() {
  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log("executou c.")
  }
}

class MultipleDecorators {
  @c()
  @a()
  @b()
  testing() {
    console.log("Termiando execução")
  }
}

const multiple = new MultipleDecorators()

multiple.testing()

// 3 - class decorator
function classDec(constructor: Function) {
  console.log(constructor.name)
  if(constructor.name === "User") {
    console.log("Criando usuário!")
  }
}

@classDec
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

const felipe = new User("Felipe")

console.log(felipe)

// 4 - method decorator
function enumerable(value: boolean) {
  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }

  @enumerable(false)
  showName() {
    console.log(this)
    return `O nome da máquina é: ${this.name}`
  }
}

const trator = new Machine("Trator")

console.log(trator.showName())

// 5 - accessor decorator
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName()  {
    return `Nome do monstro: ${this.name}`
  }

  @enumerable(true)
  get showAge()  {
    return `Idade do monstro: ${this.age}`
  }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)