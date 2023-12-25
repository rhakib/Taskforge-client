
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { SlCalender } from "react-icons/sl";
import toast from 'react-hot-toast';


const OngoingTask = ({ task, refetch }) => {

    

    const { title, description, deadline, priority, _id } = task;
    const axiosPublic = useAxiosPublic()

    const handleCompleted = async (id) => {
        

        
        const result = await axiosPublic.patch(`/tasks/${id}` )
        if (result.data.modifiedCount > 0) {
            toast.success('Marked as completed successfully')
            refetch()

        }

    }

    return (
        <div className='bg-teal-700 text-white p-4 rounded-lg'>
            <div className='flex justify-between items-center '>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                <h2 className='font-semibold flex items-center gap-1'><SlCalender></SlCalender> {deadline}</h2>
            </div>
            <p className='text-left'>{description}</p>
            <div className='flex justify-between mt-2 font-bold'>
                <button onClick={() => handleCompleted(_id)} className='bg-green-500 px-2  py-2 rounded-md'>Mark as Completed</button>
                <p className='bg-green-600 px-2  py-2 rounded-md'>{priority}</p>
            </div>
        </div>
    );
};

export default OngoingTask;