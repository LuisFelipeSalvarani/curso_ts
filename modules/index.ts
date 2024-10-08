// 1 - importação de arquivos
import importGreet from "./greet"

importGreet()

// 2 - importação de variáveis
import { x } from "./varables"

console.log(x)

// 3 - múltplas importações
import { a, b, myFunction } from "./multiple"

console.log(a)
console.log(b)

myFunction()

// 4 - alias
import { someName as name } from "./changeName"

console.log(name)

// 5 - import all
import * as myNumbers from "./numbers"

console.log(myNumbers)

const nX = myNumbers.n1

console.log(nX)

myNumbers.showNumbers()

// 6 - importaçãao de tipos
import { Human } from "./myType"

class User implements Human {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const felipe = new User("Felipe", 24)

console.log(felipe)