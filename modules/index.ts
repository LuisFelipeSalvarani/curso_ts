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