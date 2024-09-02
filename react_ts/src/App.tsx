import './App.css'

export function App() {
  // 1 - variáveis
  const name: string = "Felipe"
  const age: number = 24
  const isWorking: boolean = true

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }
  return (
    <>
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (<p>Está trabalhando</p>)}
      <h3>{userGreeting(name)}</h3>
    </>
  )
}
