import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ siservice }) => {
    const { service, logo, info, id } = siservice;
    return (
        <div className="p-7 bg-gray-100 rounded-3xl shadow-md hover:shadow-xl hover:bg-yellow-100">
            <img src={logo} alt="" className="w-1/4" />
            <p className="text-indigo-700 md:text-3xl sm:text-2xl text-xl font-semibold my-3">{service}</p>
            <p>{info.slice(0, 100)}. </p>
            <Link className="bg-indigo-200 hover:bg-indigo-300 transition-all text-indigo-700 md:px-5 rounded-md px-3 md:py-3 py-1 md:text-base text-sm inline-block md:mt-4 mt-3" to={'/service/' + id}>View More</Link>


        </div>
    );
};

export default Service;