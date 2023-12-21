import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
// import SocialLogin from "../Components/SocialLogin";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../Components/SocialLogin";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
console.log(image_hosting_key);
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const Signup = () => {

    const { createUser, updateUserProfile } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()


    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log(data)


        const imageFile = { image: data.photo[0] }
        console.log(imageFile);
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);

        const photo = res.data.data.display_url;

        createUser(data.email, data.password)
            .then(res => {
                updateUserProfile(data.name, photo)
                if (res.user) {
                    reset()

                }
                navigate('/')


            })
            .catch(err => {
                console.log(err.message);
            })
        if (res.data.success) {
            toast.success('Successfully registered!')
            navigate('/')
        }



    }

    return (
        <div>
            <section className="" style={{ backgroundImage: 'url("https://i.ibb.co/G3mX7SB/bannerbg.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="flex py-32 bg-black bg-opacity-60 flex-col items-center justify-center px-6 mx-auto">
                    <div className="w-1/3 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-teal-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                                <div className="space-y-6">
                                    <div className="">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text" id="name" {...register("name")} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required />
                                    </div>
                                    <div className="">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" {...register("email", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email" />
                                        {errors.email?.type === 'required' && <span className="text-red-500">This field is required</span>}
                                    </div>
                               
                                    <div className="">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" {...register("password", {
                                            required: true,
                                            minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                        })} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        {errors.password?.type === 'required' && <span className="text-red-500">This field is required</span>}
                                        {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 characters</span>}
                                        {errors.password?.type === 'pattern' && <span className="text-red-500">Password should contain one number, one uppercase, and one special character </span>}
                                    </div>
                                 
                               
                                    <div className="">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
                                        <input type="file" name="photo" {...register("photo")} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                  
                                </div>
                                

                                <button type="submit" className="w-full  text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                                <p className="text-sm font-light text-gray-200 ">
                                    Already have an account? <Link to='/login' className="font-medium text-white underline hover:underline ">Login here</Link>
                                </p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;