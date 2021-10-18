import React from 'react';
import { useForm } from 'react-hook-form';
import { FcCancel } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { emailSignIn, setIsloading, setError, error } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/';
    const onSubmit = (data) => {
        emailSignIn(data.email, data.password)
            .then(() => {
                history.push(redirectUrl);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsloading(false);
            })


    };
    return (

        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                <input {...register("email", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} type="email" name="email" id="email" placeholder="Your email address" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                {errors.email && <p className="error-container text-sm mb-3 border border-red-300 px-2 py-1 text-red-700 animate-pulse bg-red-100 mt-1"> Not a valid email address </p>}
            </div>
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>

                </div>
                <input {...register("password", { required: true, minLength: 8, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} type="password" name="password" id="password" placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                {errors.password && <p className="error-container text-sm mb-3 border border-red-300 px-2 py-1 text-red-700 animate-pulse bg-red-100 mt-1"> Password is not correct!   </p>}
            </div>

            {error && <div className="error-container text-sm mb-3 border border-red-300 px-2 py-1 text-red-700 animate-pulse bg-red-100 flex items-center gap-2">
                <FcCancel></FcCancel> {error}
            </div>}




            <div className="mb-6">
                <button type="submit" className="w-full px-3 py-4 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none duration-100 ease-in-out">Sign In</button>
            </div>

        </form>

    );
};

export default Login;