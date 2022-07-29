import React , {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
const [todos, setTodos] = useState([]);
//addTodo function
const addTodo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }
    const newTodos = [todo,...todos];
    setTodos(newTodos);
    console.log(...todos);
}
//updateTodo function
const updateTodo = (todoId, newValue) =>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }
    setTodos(prev => prev.map(item => (item.id  === todoId? newValue : item )))
}
//completeTodo function
 const completeTodo = id => {
     let updatedTodos = todos.map(todo => {
        if (todo.id === id ){
            todo.isComplete = !todo.isComplete;
        }
        return todo
     })
     setTodos(updatedTodos);
 }
 //removeTodo function
 const removeTodo = id =>{
    const removeArr = [...todos].filter(todo =>  todo.id !== id);
    setTodos(removeArr);
 }



  return (
    <div>
        <h1>What is your plan for today ?</h1>
        <TodoForm onSubmit= {addTodo} />
        <Todo 
        todos = {todos} 
        completeTodo = {completeTodo} 
        updateTodo = {updateTodo}
        removeTodo = {removeTodo} />
    </div>
  )
}

export default TodoList