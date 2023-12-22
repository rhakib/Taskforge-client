import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useGetTasks = () => {
    const axiosPublic = useAxiosPublic()
    const getTasks = async () => {
        const res = await axiosPublic.get('/tasks')
        return res.data;
    }

    const { data: tasks = [], refetch, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks
    })

    console.log(tasks);
    return [tasks, refetch]
};

export default useGetTasks;