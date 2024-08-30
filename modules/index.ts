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