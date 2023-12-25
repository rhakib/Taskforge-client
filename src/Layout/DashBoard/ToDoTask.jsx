import React, { useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { SlCalender } from "react-icons/sl";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";



import { Button, Modal } from 'keep-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ToDoTask = ({ task, refetch, }) => {

    const { title, description, deadline, priority, _id } = task;
    const axiosPublic = useAxiosPublic()
    const [showModal, setShowModal] = useState(false);

    const onClick = () => {
        setShowModal(!showModal);
    };


    const handleOnGoing = async (id) => {

        const res = await axiosPublic.put(`/tasks/${id}`)
        if (res.data.modifiedCount > 0) {
            toast.success('Marked as ongoing')
            refetch()

        }

    }
    const handleDelete = async (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/tasks/${id}`)
                if (res.data.deletedCount > 0) {
                    toast.success(`${title} has been deleted`)
                    refetch()
            }
            }
        });
        
    
}

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        console.log(data)

        const tasksToDo = {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority,

        }

        const res = await axiosPublic.patch(`/tasks/update/${_id}`, tasksToDo)
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            toast.success('Updated Successfully')
            reset()
            refetch()
            setShowModal(!showModal);

        }
    }


    return (
        <div className='bg-teal-700 text-white p-4 rounded-lg'>
            <div className='flex justify-between items-center '>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                <h2 className='font-semibold flex items-center gap-1'> <SlCalender></SlCalender>{deadline}</h2>
            </div>
            <p className='text-left pb-3'>{description}</p>
            <div className='flex justify-between mt-2 font-bold'>
                <div className='flex items-center gap-2'>
                    <button onClick={() => handleOnGoing(_id)} className='bg-yellow-600 px-2  py-2 rounded-md'>Mark as Ongoing</button>
                    <button className='bg-green-600 px-2  py-2 rounded-md'>{priority}</button>
                </div>
                <div className='flex items-center gap-1'>

                    <FaEdit onClick={onClick} className='text-3xl cursor-pointer'></FaEdit>
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
                                            <input defaultValue={title} type="text" id="name" {...register("title")} className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 placeholder-black block w-full p-2.5 bg-gray-300 text-black dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-semibold">Description</label>
                                            <input defaultValue={description} type="text" {...register("description", { required: true })} className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 placeholder-black focus:border-primary-600 block w-full p-2.5 bg-gray-300 text-black dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" />
                                            {errors.email?.type === 'required' && <span className="text-red-500">This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm font-semibold">Deadline</label>
                                            <input defaultValue={deadline} type="date" {...register("deadline", {
                                                required: true
                                            })} className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-300 text-black dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                        </div>
                                        <div className="flex-1">

                                            <label className="block mb-2 text-sm font-semibold">Priority</label>
                                            <select defaultValue={priority} required={true} {...register("priority", { required: true })} id="countries" className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-300 text-black dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                                        <button type='submit' method="dialog" className='px-2 py-2 rounded-md bg-teal-700 font-semibold text-white'>Update task</button>
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
                    <MdDeleteOutline onClick={() => handleDelete(_id)} className='text-4xl cursor-pointer'></MdDeleteOutline>
                </div>

            </div>
        </div>
    );
};

export default ToDoTask;