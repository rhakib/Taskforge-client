import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useGetTasks = () => {

    const { user } = useAuth()
    const email = user?.email
    const axiosPublic = useAxiosPublic()
    const getTasks = async () => {
        const res = await axiosPublic.get(`/tasks?email=${email}`)
        return res.data;
    }

    const { data: tasks = [], refetch, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks
    })

    console.log(tasks);
    return [tasks, refetch, isLoading]
};

export default useGetTasks;