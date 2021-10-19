import React from 'react';

import { FcCallback, FcGlobe, FcInvite } from "react-icons/fc";
const Contact = () => {
    return (
        <div>
            <div className="py-14 text-center bg-indigo-50">
                <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-indigo-800 ">Contact Us</h2>
                <p className="mt-3 font-base md:text-xl text-md text-indigo-500 md:mb-4 mb-1 max-w-lg mx-auto">We care for your health. Take our exclusive service and get free health.</p>
            </div>
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="map p-4 shadow-2xl border">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7298.779826110616!2d90.25498968639727!3d23.840284235053264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebc955e81169%3A0x74445878d72eb453!2sSavar%20Care%20Hospital!5e0!3m2!1sen!2sbd!4v1634651554941!5m2!1sen!2sbd" width="100%" height="360" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <div className="contact-info grid lg:grid-cols-2 gap-4">
                        <div className="conatct-number border p-4">
                            <p className="text-5xl"> <FcCallback></FcCallback> </p>
                            <p className="text-2xl font-semibold mb-3 text-indigo-700"> Contact Number </p>
                            <p> 017999444555 </p>
                            <p> 019999444555 </p>
                        </div>
                        <div className="email-address border p-4">
                            <p className="text-5xl"> <FcInvite></FcInvite> </p>
                            <p className="text-2xl font-semibold mb-3 text-indigo-700"> Email Address </p>
                            <p> carememore@gmail.com </p>
                            <p> ineedmedic@hotmail.com </p>
                        </div>
                        <div className="location border p-4">
                            <p className="text-5xl"><FcGlobe></FcGlobe>  </p>
                            <p className="text-2xl font-semibold mb-3 text-indigo-700"> Location </p>
                            <p> C-72/A, House of Moon, Planet - 94078, Solar System, Orbit 2245 AKA Nasa Burger House </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;