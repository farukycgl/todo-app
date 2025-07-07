import React from "react";
import { FaTrash, FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const TodoItem = (props) => {
  const { todo, toggle, handleDelete } = props;

  return (
    <div
      className="flex flex-row w-full items-center px-2 py-4 border-b border-b-amber-600 gap-2 pb-4 cursor-pointer select-none"
      onClick={() => toggle(todo.id)}
    >
      {todo.isComplete ? (
        <FaCircleCheck className="text-green-600 size-5" />
      ) : (
        <FaRegCircle className="text-green-600 size-5" />
      )}
      <p
        className={`flex-1
                ${todo.isComplete ? "line-through  decoration-black text-red-400" : ""}`}
      >
        {todo.text}
      </p>
      <FaTrash 
      onClick={() => handleDelete(todo.id)}
      className="text-red-600 size-5 hover:scale-110 transition-all" />
    </div>
  );
};

export default TodoItem;
