const firstName = "Felipe"
const anotherName = 1
const x = true

function greeting(name: string) {
    console.log("Olá " + name)
}

greeting(firstName)
// greeting(anotherName)
// greeting(x)

const num1 = 51
const num2 = 247

function soma(num1: number, num2: number) {
    console.log(num1 + num2)
}

soma(num1, num2)