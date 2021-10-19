import React from 'react';
import useServices from '../../hooks/useService';
import Service from './Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <div className="py-14 text-center bg-indigo-50">
                <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-indigo-800 ">Our Services</h2>
                <p className="mt-3 font-base md:text-xl text-md text-indigo-500 md:mb-4 mb-1 max-w-lg mx-auto">We care for your health. Take our exclusive service and get free health.</p>
            </div>
            <div className="container mx-auto px-4 py-10">
                <div className="services grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {
                        services.map(siservice => <Service siservice={siservice} key={siservice.id} />)
                    }
                </div>

            </div>

        </div>

    );
};

export default Services;