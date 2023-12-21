import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className='min-h-screen' style={{ backgroundImage: 'url("https://i.ibb.co/G3mX7SB/bannerbg.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="pt-40 bg-black bg-opacity-60 min-h-screen ">
                    <h1 className='text-center text-7xl leading-snug text-white'>Ready to get started?  <br />
                        Submit your task now
                        <br />
                    </h1>
                    <div className="flex justify-center">
                        <Link to='/login'>
                            <button className="mt-8 bg-teal-800 bg-opacity-80 font-semibold text-white text-2xl px-4 py-2 rounded-lg">Let's Explore</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;