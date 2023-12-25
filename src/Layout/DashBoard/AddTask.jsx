import { useForm } from 'react-hook-form';
import { FaPlus } from "react-icons/fa";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Button, Modal } from 'keep-react';
import { useEffect, useState } from 'react';
import useGetTasks from '../../Hooks/useGetTasks';
import OngoingTask from './OngoingTask';
import ToDoTask from './ToDoTask';
import CompletedTask from './CompletedTask';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';







const AddTask = () => {

    const axiosPublic = useAxiosPublic()    
    const { user } = useAuth()
    const [showModal, setShowModal] = useState(false);
    const [tasks, refetch, isLoading] = useGetTasks()

    const [task, SetTask] = useState()
    const [ongoing, SetOngoing] = useState()
    const [complete, SetComplete] = useState()
    

    useEffect(() => {
        const filteredOngoing = tasks?.filter(task => task.ongoing == true)
        SetOngoing(filteredOngoing)
        const filteredTasks = tasks?.filter(task => task.task == true)
        SetTask(filteredTasks)
        const filteredComplete= tasks?.filter(task => task.complete == true)
        SetComplete(filteredComplete)

    }, [tasks])


    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        console.log(data)

        const tasksToDo = {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority,
            task: true,
            email: user?.email
            
        }

        const res = await axiosPublic.post('/tasks', tasksToDo)
        console.log(res.data);
        if (res.data.insertedId) {
            toast.success('New task added')
            reset()
            setShowModal(!showModal);
            refetch()
            
        }
    }


    const onClick = () => {
        setShowModal(!showModal);
    };

    

    

    



    return (
        <div>
            
            <div className='flex justify-end'>
                <Button className='bg-teal-800 font-semibold text-white' onClick={onClick}><FaPlus className='mr-2'></FaPlus>Add new task</Button>
                
                <Modal

                    size="md"
                    show={showModal}
                    position="center"
                >

                    <Modal.Body>
                        <div className="space-y-6">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm font-semibold">Title</label>
                                        <input type="text" id="name" {...register("title")} className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 placeholder-black block w-full p-2.5 bg-gray-300 text-black dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm font-semibold">Description</label>
                                        <input type="text" {...register("description", { required: true })} className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 placeholder-black focus:border-primary-600 block w-full p-2.5 bg-gray-300 text-black dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" />
                                        {errors.email?.type === 'required' && <span className="text-red-500">This field is required</span>}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm font-semibold">Deadline</label>
                                        <input type="date" {...register("deadline", {
                                            required: true
                                        })} className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-300 text-black dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                    </div>
                                    <div className="flex-1">

                                        <label className="block mb-2 text-sm font-semibold">Priority</label>
                                        <select required={true} {...register("priority", { required: true })} id="countries" className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-300 text-black dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option> </option>
                                            <option value="Low">Low</option>
                                            <option value="Moderate">Moderate</option>
                                            <option value="High">High</option>
                                        </select>
                                        {errors.role?.type === 'required' && <span className="text-red-500">This field is required</span>}

                                    </div>
                                </div>


                                {/* if there is a button in form, it will close the modal */}
                                <div className='flex'>
                                    <button method="dialog" className='px-2 py-2 rounded-md bg-teal-700 font-semibold text-white'>Add task</button>
                                </div>


                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="outlineGray" onClick={onClick}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>

            


            </div>
            <hr className='border my-4 border-gray-400'/>
            <div className='grid lg:grid-cols-3 gap-4 mt-6'>
                <div className='text-center'>
                    <h2 className='text-3xl font-semibold btn-outline bg-primary text-white btn'>To do </h2>
                    <div className='space-y-2 mt-4'>
                        {
                             task?.map(task => <ToDoTask key={task._id} refetch={refetch} task={task}></ToDoTask>)
                        }
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='text-3xl font-semibold btn-outline text-white bg-orange-500 btn'>Ongoing </h2>
                    <div className='space-y-2 mt-4'>
                        {
                            ongoing?.map(task => <OngoingTask key={task._id}  refetch={refetch} task={task}></OngoingTask>)
                        }
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='text-3xl font-semibold btn-outline text-white bg-green-600 btn'>Completed </h2>
                    <div className='space-y-2 mt-4'>
                        {
                            complete?.map(task => <CompletedTask key={task._id}  refetch={refetch} task={task}></CompletedTask>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddTask;