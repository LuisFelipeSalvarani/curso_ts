// 1 - numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y:number = 15.584848

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2 - string
const firstName: string = "Felipe"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Salvarani"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 - boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)

// 4 - inference e annotation
const ann: string = "Teste"

let inf = "Teste"

// ann = 1
// inf = 1

// 5 - Desafio 2

const number: number = 575

const numberToString = number.toString()

const printMyNumber: string = `O meu número é ${numberToString}`

console.log(printMyNumber)