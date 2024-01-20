import { useEffect, useState } from "react";

import { ThemeProvider } from "./context/ThemeContext";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(
    () =>
      JSON.parse(localStorage.getItem("todos")) || [
        { id: "1", title: "Complete online JavaScript course", complete: true },
        { id: "2", title: "Jog around the park 3x", complete: false },
        { id: "3", title: "10 minutes meditation", complete: false },
        { id: "4", title: "Read for 1 hour", complete: false },
        { id: "5", title: "Pick up groceries", complete: false },
        {
          id: "6",
          title: "Coplete Todo App on Frontend Mentor",
          complete: false,
        },
      ]
  );

  // Update localStorage
  useEffect(() => {
    if (todos !== null) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) =>
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: todo, complete: false },
    ]);

  const toggleComplete = (id) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  return (
    <ThemeProvider>
      <div className={`max-w-[1440px] mx-auto container min-h-full`}>
        <div className="max-w-[33rem] mx-auto sm:px-0 px-4 pt-8 sm:pt-[4.6rem]">
          <Header className="sm:mb-14 mb-8" />
          <TodoForm addTodo={addTodo} />
          <TodoList
            className="mt-7"
            todos={todos}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            setTodos={setTodos}
          />
          <Footer className="mt-11" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
