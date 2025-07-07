import React, { useEffect, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [inputValue, setInputValue] = useState("");

  const inputContext = {
    id: todos.length + 1,
    text: inputValue,
    isComplete: false,
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === "") return null;

    setTodos([...todos, inputContext]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="place-self-center bg-[#F0E4D3] w-[450px] h-[600px] p-16 flex flex-col gap-5 rounded-xl">
      {/* baslik kismi */}
      <h1 className="text-3xl font-semibold tracking-wider flex gap-2 items-center">
        <FaClipboardList />
        Todo List
      </h1>

      {/* gorev ekleme kismi */}
      <div className="flex items-center gap-2 bg-[#FAF7F3] rounded-full">
        <input
          onChange={handleChange}
          value={inputValue}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit();
            };
          }}
          type="text"
          className="border-none outline-none bg-transparent p-3 flex-1 placeholder:text-gray-500"
          placeholder="Yeni bir görev gir"
        />
        <div className="bg-amber-600 h-full w-14 flex items-center justify-center rounded-r-full">
          <FaPlus onClick={handleSubmit} className="size-10 cursor-pointer" />
        </div>
      </div>

      {/* listelenen gorevler */}
      <div className="mt-5">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggle={toggle}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
