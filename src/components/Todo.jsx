import React from 'react';
import { FaClipboardList } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import TodoItem from './TodoItem';



const Todo = () => {
    return (
        <div className='place-self-center bg-white w-[450px] h-[600px] p-16 flex flex-col gap-5 rounded-xl'>
            {/* baslik kismi */}
            <h1 className='text-3xl font-semibold tracking-wider flex gap-2 items-center'><FaClipboardList />
                Todo App
            </h1>

            {/* ekleme kismi */}
            <div className='flex items-center gap-2 bg-amber-400 rounded-full'>
                <input
                    type="text"
                    className='border-none outline-none bg-transparent p-3 flex-1 placeholder:text-gray-500'
                    placeholder='Yeni bir görev gir'
                />
                <div className='bg-amber-600 h-full w-14 flex items-center justify-center rounded-r-full'>
                    <CiCirclePlus className='size-10 cursor-pointer' />
                </div>
            </div>

            {/* listelenen gorevler */}
            <div className='mt-5'>
                <TodoItem/>
            </div>


        </div>
    );
};

export default Todo;
