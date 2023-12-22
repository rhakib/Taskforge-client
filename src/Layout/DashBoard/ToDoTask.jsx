import React from 'react';

const ToDoTask = ({ task }) => {

    const { title, description, deadline, priority } = task;


    return (
        <div className='bg-teal-700 text-white p-4 rounded-lg'>
            <div className='flex justify-between items-center '>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                <h2 className='font-semibold'>{deadline}</h2>
            </div>
            <p className='text-left'>{description}</p>
            <div className='flex gap-2 mt-2 font-bold'>
                <button className='bg-yellow-500 px-2 py-1 rounded-md'>Mark as Ongoing</button>
                <button className='bg-green-600 px-2 py-1 rounded-md'>Mark as Completed</button>
            </div>
        </div>
    );
};

export default ToDoTask;