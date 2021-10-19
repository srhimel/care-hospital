import React from 'react';
import AboutSection from '../shared/AboutSection/AboutSection';
import Doctors from '../shared/Doctors/Doctors';

const About = () => {
    return (
        <div>
            <div className="py-14 text-center bg-indigo-50">
                <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-indigo-800 ">About Us</h2>
                <p className="mt-3 font-base md:text-xl text-md text-indigo-500 md:mb-4 mb-1 max-w-lg mx-auto">We care for your health. Take our exclusive service and get free health.</p>
            </div>
            <AboutSection>
            </AboutSection>
            <Doctors />
        </div>
    );
};

export default About;