import React, { useState } from 'react';
import { FcCancel } from 'react-icons/fc';
import { useHistory } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
const Register = () => {
    const { emailSignUp, error, setError, setIsloading } = useFirebase();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const history = useHistory();
    const handleSignUp = e => {
        e.preventDefault();
        emailSignUp(email, password)
            .then(() => {
                history.push('/');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsloading(false);
            })

    }
    return (

        <form className="mb-4" onSubmit={handleSignUp}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                <input required onChange={handleEmail} type="email" name="email" id="email" placeholder="Your email address" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>

                </div>
                <input required onChange={handlePassword} type="password" name="password" id="password" placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>

            {error && <div className="error-container text-sm mb-3 border border-red-300 px-2 py-1 text-red-700 animate-pulse bg-red-100 flex items-center gap-2">
                <FcCancel></FcCancel> {error}
            </div>}
            <div className="mb-6">
                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Sign Up</button>
            </div>

        </form>
    );
};

export default Register;