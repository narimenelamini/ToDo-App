import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const  [input, setInput] = useState('')
   const inputRef = useRef(null);
   useEffect(() => {
    inputRef.current.focus()
   });



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
        });
        setInput('')
        

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
     ref={inputRef}
     />
     <button className='todo-button'>Add todo</button>

    </form>
  )
}

export default TodoForm