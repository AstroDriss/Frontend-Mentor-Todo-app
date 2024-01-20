import { useEffect, useState } from "react";

import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";

const TodoList = ({
  todos,
  className,
  deleteTodo,
  toggleComplete,
  setTodos,
}) => {
  const [filter, setFilter] = useState("all");
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [filterd, setFilterd] = useState([]);
  const filterOptions = ["all", "active", "completed"];

  useEffect(() => {
    setFilterd((prev) => {
      switch (filter) {
        case "active":
          return todos.filter((todo) => !todo.complete);
        case "completed":
          return todos.filter((todo) => todo.complete);
        default:
          return todos;
      }
    });
  }, [filter, todos]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index);
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (filter == "all" && draggedIndex !== null && draggedIndex !== index) {
      const updatedTodos = [...todos];
      const [draggedTodo] = updatedTodos.splice(draggedIndex, 1);
      updatedTodos.splice(index, 0, draggedTodo);
      setDraggedIndex(index);

      setTodos(updatedTodos);
    }
  };

  function handleDragEnd() {
    setDraggedIndex(null);
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.complete));
  };

  return (
    <>
      <main
        className={`bg-veryLightGray dark:bg-dark-VeryDarkDesaturatedBlue rounded-md ${className} shadow-2xl`}
      >
        <ul>
          {filterd &&
            filterd.map((todo, index) => (
              <li
                key={todo.id}
                draggable
                className="group/list flex justify-between text-veryDarkGrayishBlue p-[1.12rem] border-b border-veryLightGrayishBlue dark:border-dark-VeryDarkGrayishBlue-2"
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
              >
                <input
                  className="hidden"
                  type="checkbox"
                  checked={todo.complete}
                  id={todo.id}
                  onChange={() => toggleComplete(todo.id)}
                />
                <label
                  className="flex-1 cursor-pointer flex items-center gap-5 dark:text-dark-LightGrayishBlue"
                  htmlFor={todo.id}
                  tabIndex="0"
                  role="checkbox"
                  aria-checked={todo.complete}
                  onKeyDown={(e) => {
                    if (e.key === " " || e.key === "Enter") {
                      toggleComplete(todo.id);
                    }
                  }}
                >
                  <div
                    className={`${
                      todo.complete && "bg-Check "
                    } relative w-7 h-7 rounded-full flex justify-center items-center`}
                  >
                    <svg
                      className={`absolute w-full h-full stroke-darkGrayishBlue ${
                        !todo.complete
                          ? "group-hover/list:stroke-[url(#check-gradient)] group-focus-within/list:stroke-[url(#check-gradient)]"
                          : "stroke-none"
                      }`}
                    >
                      <circle
                        cx="50%"
                        cy="50%"
                        r="calc(50% - .5px)"
                        strokeWidth="1px"
                        stroke
                        fill="none"
                      ></circle>
                    </svg>

                    {todo.complete && <img src={check} alt="" />}
                  </div>
                  <span
                    className={`sm:text-sm text-xs ${
                      todo.complete && "line-through text-darkGrayishBlue"
                    }`}
                  >
                    {todo.title}
                  </span>
                </label>

                <button
                  aria-label="delete"
                  className="sm:opacity-0 transition-opacity group-hover/list:opacity-100 focus:opacity-100 ml-1"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <svg
                    className="fill-darkGrayishBlue dark:fill-[#494C6B]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    />
                  </svg>
                </button>
              </li>
            ))}
        </ul>

        {todos.length > 0 && (
          <div className="text-darkGrayishBlue py-4 px-5 flex justify-between text-sm">
            <p>{todos.filter((todo) => !todo.complete).length} items left</p>

            <div className="sm:flex gap-3 hidden">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFilter((prev) => opt)}
                  className={`capitalize ${
                    filter == opt
                      ? "text-primaryBlue font-semibold"
                      : "hover:text-veryDarkGrayishBlue dark:hover:text-dark-lightGrayishBlueHover"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              className="hover:text-veryDarkGrayishBlue dark:hover:text-dark-LightGrayishBlue"
              onClick={clearCompleted}
            >
              Clear Completed
            </button>
          </div>
        )}
      </main>
      <div className="gap-3 sm:hidden shadow-2xl py-3 rounded-md flex justify-center mt-4 bg-veryLightGray dark:bg-dark-VeryDarkDesaturatedBlue text-darkGrayishBlue">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setFilter((prev) => opt)}
            className={`capitalize ${
              filter == opt
                ? "text-primaryBlue font-semibold"
                : "hover:text-veryDarkGrayishBlue dark:hover:text-dark-lightGrayishBlueHover"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </>
  );
};

export default TodoList;
