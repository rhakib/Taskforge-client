import React from 'react';

const Usage = () => {
    return (
        <div className='max-w-screen-xl mx-auto pb-20 '>
            <h2 className='text-4xl text-center font-semibold my-12'>Industry that loves us</h2>
            <div className='grid lg:grid-cols-3 '>
                <div className='bg-base-300 w-96'>
                    <img className='w-60 mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAq-BspPoED3KQR7V1CD6CeOAPZp7E2aF1D731MNosQ&s" alt="" />
                    <h2 className='text-2xl text-center font-semibold'>Web Design</h2>

                </div>
                <div className='bg-base-300 w-96'>
                    <img className='w-60 mx-auto' src="https://content.wepik.com/statics/26127877/preview-page0.jpg" alt="" />
                    <h2 className='text-2xl text-center font-semibold'>Graphic Design</h2>

                </div>
                <div className='bg-base-300 w-96'>
                    <img className='w-60 mx-auto h-60' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnRVbsqOm7nFQWAC5RTzsobQw6HsKg2MFIQ&usqp=CAU" alt="" />
                    <h2 className='text-2xl text-center font-semibold'>SEO</h2>

                </div>
            </div>
        </div>
    );
};

export default Usage;