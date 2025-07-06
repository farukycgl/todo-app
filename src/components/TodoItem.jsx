import React from 'react';
import { FaTrash, FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";


const TodoItem = (props) => {
    const { todo, toggle } = props;

    return (
        <div
            className='flex flex-row w-full items-center px-2 py-4 gap-2 border-b pb-4 cursor-pointer'
            onClick={() => toggle(todo.id)}
        >
            {
                todo.isComplete ? (<FaCircleCheck className='text-green-600 size-5'/>)
                    : (<FaRegCircle className='text-green-600 size-5' />
                    )}
            <p className='flex-1'>{todo.text}</p>
            <FaTrash className='text-red-600 size-5 hover:scale-110 transition-all' />

        </div>
    );
}

export default TodoItem;
