import React, { useRef } from 'react';
import { FcCancel } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
const Register = () => {
    // react hook form 

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const password = useRef({});
    password.current = watch("password", "");


    const { emailSignUp, error, setError, setIsloading } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/';
    const onSubmit = (data) => {
        emailSignUp(data.email, data.password, data.name, data.photo)
            .then(() => {
                history.push(redirectUrl);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsloading(false);
            })


    };
    const inputClass = "w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring ";
    const inputClassNormal = " focus:ring-indigo-100 focus:border-indigo-300 border-gray-300";
    const inputClassError = " focus:ring-red-100 focus:border-red-300 border-red-300";
    return (

        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Full Name</label>
                <input
                    {...register('name', {
                        required: "You must enter your Name",
                        minLength: {
                            value: 3,
                            message: "Name should be at least 3 characters"
                        },
                    })}


                    type="text" id="name" placeholder="Your Full Name" className={!errors.name ? inputClass + inputClassNormal : inputClass + inputClassError} />
                {errors?.name && <p className="error-container text-sm mb-3 border border-red-300 px-2 py-1 text-red-700 animate-pulse bg-red-100 mt-1"> {errors?.name?.message} </p>}
            </div>
            <div className="mb-6">
                <label htmlFor="photo" className="block mb-2 text-sm text-gray-600">Photo Url</label>
                <input
                    {...register('photo')}


                    type="url" id="photo" placeholder="Due to limited technology we need url " className={!errors.photo ? inputClass + inputClassNormal : inputClass + inputClassError} />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email Address</label>
                <input
                    {...register('email', {
                        required: "You must enter your email",
                        pattern: {
                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Email is invalid!"
                        }
                    })}


                    type="email" id="email" placeholder="Your email address" className={!errors.email ? inputClass + inputClassNormal : inputClass + inputClassError} />
                {errors?.email && <p className="error-container text-sm mb-3 border border-red-300 px-2 py-1 text-red-700 animate-pulse bg-red-100 mt-1"> {errors?.email?.message} </p>}
            </div>
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm text-gray-600">Password</label>

                </div>
                <input
                    {...register('password', {
                        required: "You must specify a password",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        },
                        pattern: {
                            value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                            message: "Password is not strong!"
                        }
                    })}
                    type="password" id="password" placeholder="Your password" className={!errors.password ? inputClass + inputClassNormal : inputClass + inputClassError} />
                {errors?.password && <p className="error-container text-sm mb-3 border border-red-300 px-2 py-1 text-red-700 animate-pulse bg-red-100 mt-1"> {errors?.password?.message}   </p>}
            </div>
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <label htmlFor="rePassword" className="text-sm text-gray-600">Repeat Password</label>

                </div>
                <input
                    {...register('password_repeat', {
                        validate: value =>
                            value === password.current || "The passwords do not match"
                    })}
                    type="password" id="rePassword" placeholder="Repeat Your password" className={!errors.password ? inputClass + inputClassNormal : inputClass + inputClassError} />
                {errors?.password_repeat && <p className="error-container text-sm mb-3 border border-red-300 px-2 py-1 text-red-700 animate-pulse bg-red-100 mt-1"> {errors?.password_repeat?.message}  </p>}
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