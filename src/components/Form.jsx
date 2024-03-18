import { useState } from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form
        className="bg-white rounded-lg p-5 w-500 mx-auto mt-12 shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex">
          <input
            className="bg-white w-full block outline-none text-black text-base"
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="Enter Todo Task ..."
          />
          <button
            className="bg-black  inline-block outline-none rounded px-6 py-2"
            type="submit"
          >
            <MdOutlineAddToPhotos className="text-white"/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
