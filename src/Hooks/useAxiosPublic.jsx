import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://taskforge-server-nine.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;