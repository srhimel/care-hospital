import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Doctors = () => {
    return (
        <div className="bg-indigo-50">
            <div className="py-14 text-center">
                <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-indigo-800 ">Our Doctors</h2>
                <p className="mt-3 font-base md:text-xl text-md text-indigo-500 md:mb-4 mb-1 max-w-lg mx-auto">Meet our world class doctors who will help you to feel better instantly.</p>
            </div>
            <div className="container mx-auto px-4 pb-12">
                <div className="doctors grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">

                    <div className="doctor text-center py-10 px-5 hover:bg-white border rounded-3xl">
                        <img className="rounded-full w-2/3 mx-auto my-4" src="https://i.ibb.co/gj9sBDG/member1.jpg" alt="" />
                        <h4 className="text-indigo-700 font-bold md:text-3xl sm:text-2xl text-xl mb-1">Dr. Jason Mamua</h4>
                        <p className="text-lg font-bold text-yellow-600 mb-4">Cardiologiest</p>
                        <div className="socail flex justify-center gap-3 text-xl text-white">
                            <div className="cursor-pointer hover:bg-indigo-700 transition-all h-10 w-10 bg-indigo-600 rounded-xl flex justify-center items-center"><BsFacebook /> </div>
                            <div className="cursor-pointer hover:bg-indigo-700 transition-all h-10 w-10 bg-indigo-600 rounded-xl flex justify-center items-center"><BsTwitter /> </div>
                            <div className="cursor-pointer hover:bg-indigo-700 transition-all h-10 w-10 bg-indigo-600 rounded-xl flex justify-center items-center"><BsInstagram /> </div>
                        </div>
                    </div>
                    <div className="doctor text-center py-10 px-5 bg-white border rounded-3xl md:transform md:-translate-y-10">
                        <img className="rounded-full w-2/3 mx-auto my-4" src="https://i.ibb.co/19FTY3P/member2.jpg" alt="" />
                        <h4 className="text-indigo-700 font-bold md:text-3xl sm:text-2xl text-xl mb-1">Dr. Sheikh Hasina</h4>
                        <p className="text-lg font-bold text-yellow-600 mb-4">Dentist</p>
                        <div className="socail flex justify-center gap-3 text-xl text-white">
                            <div className="cursor-pointer hover:bg-indigo-700 transition-all h-10 w-10 bg-indigo-600 rounded-xl flex justify-center items-center"><BsFacebook /> </div>
                            <div className="cursor-pointer hover:bg-indigo-700 transition-all h-10 w-10 bg-indigo-600 rounded-xl flex justify-center items-center"><BsTwitter /> </div>
                            <div className="cursor-pointer hover:bg-indigo-700 transition-all h-10 w-10 bg-indigo-600 rounded-xl flex justify-center items-center"><BsInstagram /> </div>
                        </div>
                    </div>
                    <div className="doctor text-center py-10 px-5 hover:bg-white border rounded-3xl">
                        <img className="rounded-full w-2/3 mx-auto my-4" src="https://i.ibb.co/16nd3P6/member3.jpg" alt="" />
                        <h4 className="text-indigo-700 font-bold md:text-3xl sm:text-2xl text-xl mb-1">Dr. Tarek Zia</h4>
                        <p className="text-lg font-bold text-yellow-600 mb-4">Therapist</p>
                        <div className="socail flex justify-center gap-3 text-xl text-white">
                            <div className="cursor-pointer hover:bg-indigo-700 transition-all h-10 w-10 bg-indigo-600 rounded-xl flex justify-center items-center"><BsFacebook /> </div>
                            <div className="cursor-pointer hover:bg-indigo-700 transition-all h-10 w-10 bg-indigo-600 rounded-xl flex justify-center items-center"><BsTwitter /> </div>
                            <div className="cursor-pointer hover:bg-indigo-700 transition-all h-10 w-10 bg-indigo-600 rounded-xl flex justify-center items-center"><BsInstagram /> </div>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    );
};

export default Doctors;