import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
import Header from "./Header";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedTodos =  todos.filter((todo)=>todo.done).length
  const totalTodos = todos.length
  
  return (
    <div className="h-full flex flex-col justify-between">
      <Header />
      <div className="px-5 md:px-0">
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
     <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
    </div>
  );
};

export default Todo;
