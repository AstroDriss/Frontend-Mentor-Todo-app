import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() != "") {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-6 items-center dark:bg-dark-VeryDarkDesaturatedBlue px-4 py-2 rounded-md bg-veryLightGray"
    >
      <input
        type="text"
        className="py-2 order-2 w-full bg-transparent outline-none caret-primaryBlue dark:text-dark-LightGrayishBlue"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Create a new todo..."
      />

      <button
        aria-label="add todo"
        className="w-7 order-1 aspect-square rounded-full border border-darkGrayishBlue dark:border-dark-VeryDarkGrayishBlue-1"
      ></button>
    </form>
  );
};

export default TodoForm;
