import { useEffect, useState } from "react"
import MyComponent from "./components/Comp"
import MinhaLista from "./components/MinhaLista"
import MeuContador from "./meuContador"



const tarefas = [
  { id: '1', title: 'minha primeira tarefa' },
  { id: '2', title: 'minha segunda tarefa' },
  { id: '3', title: 'minha terceira tarefa' },
  { id: '4', title: 'minha quarta tarefa' },
]

function App() {

  const[ tarefas, setTarefas] = useState([])

  useEffect(() => {

    async function buscarDados() {
     const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
     const resultadoFinal =  await resultado.json()
     return resultadoFinal
    }

    buscarDados().then(res => setTarefas(res))
  }, [])


  return (
    <div>
      <MeuContador />
      <MyBotton conteudo='me clique' />
      <MyBotton conteudo='depois aqui' />
      <MyBotton conteudo='por fim aqui' />
      <MyComponent />
      <MinhaLista />
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <li key={tarefa.id}>{tarefa.title}</li>
          )
        }
        )}
      </ol>

    </div>
  )
}

function MyBotton(props) {
  return (
    <button>{props.conteudo}</button>
  )
}

export default App
