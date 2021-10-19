import React from 'react';

const AboutSection = () => {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
                    <div className="about-img">
                        <img src="https://i.ibb.co/VmLDkHT/about.png" alt="" />
                    </div>
                    <div className="about-info">
                        <p className="text-xl font-bold text-yellow-600">We are here </p>
                        <p className="text-indigo-700 font-bold md:text-4xl sm:text-2xl text-xl my-4">The Great Place Of Medical Hospital Center</p>
                        <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                        <div className="about-tiks grid md:grid-cols-2 grid-cols-1 gap-7 mt-7">
                            <p className="border border-indigo-300 p-4 rounded-md text-xl font-semibold text-indigo-700">Emergency Help</p>
                            <p className="border border-green-300 p-4 rounded-md text-xl font-semibold text-green-700">Qualify Doctors</p>
                            <p className="border border-red-300 p-4 rounded-md text-xl font-semibold text-red-700">Best Professionals</p>
                            <p className="border border-purple-300 p-4 rounded-md text-xl font-semibold text-purple-700">Mediacal TReatment</p>
                        </div>
                        <button className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white md:px-5 rounded-md px-3 md:py-3 py-1 md:text-base text-sm inline-block md:mt-8 mt-3">Contact Us</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutSection;