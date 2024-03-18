import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    console.log("delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name){
    const newArray=(todos.map((todo)=>todo.name === name? {...todo, done: !todo.done}: todo))
    setTodos(newArray)
  }
  return (
    <div className="w-500 text-gray-700 text-xl">
      <div className="flex justify-between items-center font-bold px-5 py-2">
        <span className={item.done ? "line-through" : ""} onClick={() => handleClick(item.name)}>{item.name}</span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className="float-right bg-black px-6 py-2 rounded text-white"
          >
            <MdDeleteForever className="text-white"/>
          </button>
        </span>
      </div>
      <div className="px-5">  <hr className="border border-solid text-gray-700" /></div>
    
    </div>
  );
};

export default TodoItem;
