import React, {useState} from 'react'
import Todo from './Todo'

const handleSubmit = (e, todos, SetTodos, input, setInput) => {
    e.preventDefault()
    const id = (todos.length) ? todos[todos.length - 1].id + 1 : 0 + 1
    console.log("todos.handleSubmit id", id)
    SetTodos([...todos, {id: id, description: input}])
    setInput('')
}

const deleteTodo = (id, todos, SetTodos) => {
    SetTodos(todos.filter(todo => todo.id !== id))
}


export default () => {
    const [todos, SetTodos] = useState([
        // {id:1, description: 'Sample Task'}
    ])

    const [input, setInput] = useState('')
    
    return (
        <div className ="Todos">
            <form onSubmit={(e) => handleSubmit(e, todos, SetTodos, input, setInput)}>
            <input onChange={(e) => setInput(e.target.value)} value = {input}/>
            <button>Submit</button>
            </form>
        {todos.map(todo => (
            <Todo description={todo.description}
            id={todo.id}
            deleteTodo={(id) => deleteTodo(id, todos, SetTodos)}/>
        ))}
        </div>
    )
}
