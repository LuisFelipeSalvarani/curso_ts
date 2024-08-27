// 1 - void
function withoutReturn():void {
    console.log("Está função não tem retorno!")
    // return 1
}

withoutReturn()

// 2 - callback como argumento
function greeting(name: string):string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName:string) {
    console.log("Preparando a função")

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, "Felipe")
preGreeting(greeting, "Luis")

// 3 - generic functions
function firstElement<T>(arr: T[]):T {
    return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))
// console.log(firstElement("Teste"))

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Felipe"}, {age: 30, job: "Programmer"})

console.log(newObject)