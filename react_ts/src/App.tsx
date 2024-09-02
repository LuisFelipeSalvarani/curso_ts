import './App.css'

// 4 - importação de componentes
import { FirstComponent } from './components/FirstComponent'

// 5 - desestruturando props
import { SecondComponent } from './components/SecondComponent'
import { Destructuring, Category } from './components/Destructuring'

// 6 - useState
import { State } from './components/State'

// 8 - type
type textOrNull = string | null

type fixed = "Isso" | "Ou" | "Aquilo"

export function App() {
  // 1 - variáveis
  const name: string = "Felipe"
  const age: number = 24
  const isWorking: boolean = true

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  // 8 - type
  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null

  // mySecondText = "opa"

  const testandoFixed: fixed = "Isso"

  return (
    <>
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (<p>Está trabalhando</p>)}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name='Segundo' />
      <Destructuring title='Primeiro post' content='Algum conteúdo' commentQty={10} tags={["ts", "js"]} category={Category.TS} />
      <Destructuring title='Segundo post' content='Mais outro conteúdo' commentQty={5} tags={["python"]} category={Category.P} />
      <State />
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
    </>
  )
}
