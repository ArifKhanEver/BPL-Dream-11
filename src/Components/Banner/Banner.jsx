import React from 'react';
import heroBg from '../../assets/bg-shadow.png'
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className="container mx-auto rounded-3xl mt-4 hero bg-gray-800 min-h-screen" style={{backgroundImage: `url(${heroBg})`}}>
            <div className="hero-content text-center ">
                <div className="flex flex-col justify-center items-center">
                <img src={bannerImg} alt="Banner Image" />
                <h1 className="text-3xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="py-6 text-gray-400 ">
                    Beyond Boundaries Beyond Limits
                </p>
                <button className="btn btn-warning font-bold">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;