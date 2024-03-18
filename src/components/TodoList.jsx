import TodoItem from "./TodoItem"
const TodoList = ({todos, setTodos}) => {
  const sortedTodos = todos.slice().sort((a,b) =>Number(a.done) - Number(b.done))
  console.log("list", sortedTodos)
  return (
    <div className="bg-white h-96 overflow-y-auto overflow-x-hidden text-black rounded-lg  w-500 mx-auto mt-12 shadow-md">
         {console.log(todos)}
      {sortedTodos.map((item) => (
        <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default TodoList