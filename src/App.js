import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])

  const filterHandler = () => {
    // switch (status) {
    //   case "completed":
    //     setFilteredTodos(todos.filter(item => item.completed === true))
    //     break;
    //   case "uncompleted":
    //     setFilteredTodos(todos.filter(item => item.completed === false))
    //     break;
    //   default:
    //     setFilteredTodos(todos)
    //     break;
    // }
    if (status === "completed") {
      setFilteredTodos(todos.filter(item => item.completed === true))
    } else if (status === "uncompleted"){
      setFilteredTodos(todos.filter(item => item.completed === false))
    } else {
      setFilteredTodos(todos)
    }
  }
  const saveToLocal = () => {
    if(todos.length){
    localStorage.setItem("todos", JSON.stringify(todos));
  }}

  const getFromLocal = ()=> {
    let localTodo = localStorage.getItem("todos")
    if(localTodo){
      setTodos(JSON.parse(localTodo));
    }
    else {
      localStorage.setItem("todos", JSON.stringify([]))
    }
  }

  useEffect(() => {
    getFromLocal()
  }, [])
  
  useEffect(() => {
    filterHandler()
    saveToLocal()
  }, [status, todos])
  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, {text:inputText, completed: false, id: Math.random()*1000}])
    setInputText('')
    console.log(todos);
  }
  return (
    <div>
      <header>
        <h1>Ferhat's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;
