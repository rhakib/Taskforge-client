import { useEffect, useState } from 'react';
import useGetTasks from '../../Hooks/useGetTasks';
import CompletedTask from './CompletedTask';

const AllCompletedTask = () => {

    const [tasks, refetch] = useGetTasks()
    const [completed, SetCompleted] = useState([])


    useEffect(() => {

        const filteredComplete = tasks?.filter(task => task.complete == true)
        SetCompleted(filteredComplete)

    }, [tasks])


    return (
        <>
        <h2 className='text-4xl font-semibold'>Completed Task</h2>
            <div className='grid lg:grid-cols-3 mt-8 gap-3 '>
                {
                    completed?.map(task => <CompletedTask key={task._id} refetch={refetch} task={task}></CompletedTask>)
                }
            </div>
        </>
    );
};

export default AllCompletedTask;