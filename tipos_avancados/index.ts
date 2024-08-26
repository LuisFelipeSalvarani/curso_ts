// 1 - arrays
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["Felipe", "Carlos"]

// nomes.push(4)

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

// nums.push("teste")

console.log(nums[0])

// 3 - any

const arr1: any = [1, "teste", true, [], {nome: "Matheus"}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - parâmetros tipados

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 5)

// soma("a", "b")

// 5 - Retornos tipados

function greeting(name: string): string {
    return `Olá ${name}`
}

console.log(greeting("Felipe"))

// 6 - Função anônima

setTimeout(function() {
    const sallary: number = 1000

    // console.log(parseFloat(sallary))

    // console.log(sallary)
}, 2000)

// 7 - Tipos de objeto

function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " +  coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)
// passCoordinates({nome: 1, sobrenome: 2})

const pessoaObj:{nome: string, surname: string} = {nome: "Felipe", surname: "Salvarani"}