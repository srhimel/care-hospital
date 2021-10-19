import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero-area bg-indigo-50 py-14" style={{ clipPath: 'ellipse(108% 100% at 60.44% 0%)' }}>
            <div className="container mx-auto px-4 mw-1300">
                <div className="flex items-center gap-3">
                    <div className="w-3/5 -mt-10">
                        <p className="font-semibold md:text-2xl text-md text-indigo-500 md:mb-4 mb-1">We Provide All Health Care Solution </p>
                        <h2 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold text-indigo-800 ">Protect Your Health And Take Care To Of Your Health</h2>
                        <Link className="bg-yellow-600 hover:bg-yellow-700 transition-all text-white md:px-5 rounded-md px-3 md:py-3 py-1 md:text-base text-sm inline-block md:mt-8 mt-3" to="/contact-us">Book Appointment Now</Link>
                    </div>
                    <div className="w-2/5">
                        <img className="animate-bounce" src="https://i.ibb.co/YTNVC4Z/doctor.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;