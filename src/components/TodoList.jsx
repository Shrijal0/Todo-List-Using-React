import { SiFoodpanda } from "react-icons/si";

import TodoItem from "./TodoItem";
const TodoList = ({ todos, setTodos }) => {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  console.log("list", sortedTodos);
  return (
    <div className="relative bg-white h-96 overflow-y-auto overflow-x-hidden text-black rounded-lg  w-full md:w-500 mx-auto mt-12 shadow-md">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] opacity-10">
        <SiFoodpanda />
      </div>

      {console.log(todos)}
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
