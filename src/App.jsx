import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

import './App.css'

function App() {
  const [ todos, setTodos ] = useState([
    {
      id:1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir na academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },

  ])

  const addTodo = ( text, category ) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000) ,
      text,
      category,
      isCompleted: false,
    },
   ];

    setTodos(newTodos);

  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
      const filtredTodos = newTodos.filter(todo => 
        todo.id !== id ? todo : null 
        );
        setTodos(filtredTodos)
  };
  

  return (
    <div className='app'>
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} removeTodo={removeTodo}></Todo>
      ))}
    </div>
    <TodoForm addTodo={addTodo}></TodoForm>
  </div>
  )
}

export default App
