import React from 'react';
import { FaTrash } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";



const TodoItem = () => {
    return (
        <div className='flex flex-row w-full items-center p-2 gap-2 border-b pb-4'>
            <FaRegCircle className='text-green-600 size-5'/>
            <p className='flex-1'>bu görev tamamlandı.</p>
            <FaTrash className='text-red-600 size-5'/>

        </div>
    );
}

export default TodoItem;
