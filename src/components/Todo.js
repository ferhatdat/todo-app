import React from 'react'

const Todo = ({todo, todos, setTodos}) => {
    console.log(todo);
    const completeHandler = ()=> {
        setTodos(todos.map(item => item.id === todo.id ? {...item, completed: !item.completed} : item))
    }
    const deleteHandler = ()=> {
        setTodos(todos.filter(item => item.id !== todo.id))
    }
  return (
    <div className='todo'>
        <li className={todo.completed ? 'todo-item completed' : 'todo-item'}>{todo.text}</li>
        <button className='complete-btn' onClick={completeHandler}><i className="fas fa-check"></i></button>
        <button onClick={deleteHandler} className='trash-btn'><i className="fas fa-trash"></i></button>
    </div>
  )
}

export default Todo