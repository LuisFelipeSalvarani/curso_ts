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
