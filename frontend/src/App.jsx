import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos")
  //  .then(async function(res){
  //   const json = await res.json();
  //   setTodos(json.todos);
  //  })

   useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })   
  },[todos])

  return (
    <>
     <CreateTodo/>
     <Todos todos={todos}></Todos>
    </>
  )
}

export default App
