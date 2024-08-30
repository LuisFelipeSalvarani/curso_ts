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