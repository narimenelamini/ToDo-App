import React, {useState} from 'react'

function TodoForm(props) {
    const  [input, setInput] = useState('')
    // handleChange function
    const handleChange = e =>{
        setInput(e.target.value);
    }


    // handleSubmit function
    const handleSubmit = e =>{
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() *10),
            text: input
        })
        

    }











  return (
    <form className='todo-form' onSubmit={handleSubmit}>
     <input 
     type= 'text'
     placeholder='Add a todo'
     value={input}
     name = 'text'
     className='todo-input'
     onChange={handleChange}
     />
     <button className='todo-button'>Add todo</button>

    </form>
  )
}

export default TodoForm