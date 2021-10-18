import React from 'react';
import { FcDisclaimer } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-indigo-50 px-4">
            <div className="404-wrapper -mt-40 text-center">
                <p className="flex items-center justify-center"><FcDisclaimer className="text-9xl" /></p>
                <div className="block sm:flex items-center mt-4">
                    <p className="text-8xl font-bold text-purple-500 font-mono">404</p>
                    <div className="sm:text-left ml-4 border-l-0 sm:border-l-2 pl-3">
                        <p className="text-3xl font-bold mt-0 pt-0">Page not found</p>
                        <p className="text-gray-400 font-thin text-sm pb-1">Please check the URL in the address bar and try again.</p>
                        <Link to="/" className="bg-indigo-600 text-white px-3 py-1 mt-3 inline-block font-medium rounded-md">Go back home</Link>
                        <Link to="/contact-us" className="ml-3 bg-indigo-200 text-indigo-700 px-3 py-1 mt-3 inline-block font-medium rounded-md">Contact Support</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotFound;