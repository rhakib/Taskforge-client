import { RxCross2 } from "react-icons/rx";
import { MdVerified } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const CompletedTask = ({task, refetch}) => {

    const { title, description, deadline, priority, _id } = task;
    

    const axiosPublic = useAxiosPublic()

    const handleDelete = async (id) => {      
                const res = await axiosPublic.delete(`/tasks/${id}`)
                if (res.data.deletedCount > 0) {
                    toast.success(`${title} has been deleted`)
                    refetch()
            }
            
        
        
    
}

    return (
        <div className='bg-teal-700 text-white p-4 rounded-lg'>
            <div className='flex justify-between items-center '>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                <RxCross2 onClick={()=> handleDelete(_id)} className="text-xl cursor-pointer"></RxCross2>
            </div>
            <p className='text-left'>{description}</p>
            <div className='flex justify-between mt-2 font-bold'>
                <p  className='bg-blue-600 px-2 flex items-center gap-1 py-2 rounded-md'><MdVerified className="text-xl"></MdVerified>Completed</p>
                <p className='bg-green-600 px-2  py-2 rounded-md'>{priority}</p>
            </div>
        </div>
    );
};

export default CompletedTask;