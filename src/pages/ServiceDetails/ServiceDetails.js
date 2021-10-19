import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useService';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services] = useServices();
    const [serviceDetails, setServiceDetails] = useState({});
    useEffect(() => {
        if (services.length) {
            setServiceDetails(services.find(service => service.id === parseInt(serviceId)));
        }

    }, [serviceId, services]);

    const { service, img, info } = serviceDetails;
    return (

        <div>
            <div className="container px-4 mx-auto py-14">
                <div className="md:flex gap-10">
                    <div className="md:w-2/3">
                        <img src={img} alt="" className="rounded-3xl" />
                        <p className="text-2xl font-bold text-indigo-700 my-4">{service}</p>
                        <p>{info}</p>
                    </div>
                    <div className="md:w-1/3 md:mt-0 mt-10">
                        <p className="text-2xl font-semibold border-l-8 border-indigo-600 px-3 bg-indigo-50 text-indigo-700">All Services: </p>
                        {services.map(siservice => <Link key={siservice.id} to={'/service/' + siservice.id} className="
                        flex items-center border-2 my-3 px-3 py-1 gap-4
                        hover:bg-gray-100
                        ">
                            <img src={siservice.logo} alt="" className="w-10" />
                            <p>{siservice.service}</p>
                        </Link>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;