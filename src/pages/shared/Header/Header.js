import React, { useState } from 'react';
import logo from '../../../logo.png';
import { FcMenu } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const [show, setShow] = useState('hidden');
    const handleToggle = () => {
        show === 'hidden' ? setShow('block') : setShow('hidden');
    }
    const [showMenu, setShowMenu] = useState('hidden');
    const handleToggleMenu = () => {
        showMenu === 'hidden' ? setShowMenu('block') : setShowMenu('hidden');
    }

    const { user, logOut } = useAuth();
    const handleSignOut = () => {
        handleToggle();
        logOut();
    }
    return (
        <div className="bg-white shadow">
            <div className="container mw-1300 mx-auto px-4">
                <div className="flex items-center flex-wrap">
                    <div className="md:w-0 w-1/3 md:hidden block">
                        <button onClick={handleToggleMenu} className="px-3 py-2 rounded bg-purple-200 flex items-center gap-2"><FcMenu></FcMenu> Menu </button>
                    </div>
                    <div className="md:w-1/5 w-1/3 order-1 md:block flex justify-center">

                        <Link className="logo" to="/"> <img className="w-28 md:w-32" src={logo} alt="" /></Link>
                    </div>
                    <div className=" md:w-3/5 w-full md:order-2 order-3">
                        <nav className={showMenu + " md:block"}>
                            <ul className="navbar md:flex gap-10 justify-center">
                                <li onClick={handleToggleMenu} className="nav-item font-medium md:p-0 py-1 md:border-0 border-b-2"><NavLink activeClassName={'text-purple-600'} exact to="/" className="hover:text-purple-600 block nav-link">Home</NavLink></li>
                                <li onClick={handleToggleMenu} className="nav-item font-medium md:p-0 py-1 md:border-0 border-b-2"><NavLink activeClassName={'text-purple-600'} to="/about-us" className="hover:text-purple-600 block nav-link">About Us</NavLink></li>
                                <li onClick={handleToggleMenu} className="nav-item font-medium md:p-0 py-1 md:border-0 border-b-2"><NavLink activeClassName={'text-purple-600'} to="/services" className="hover:text-purple-600 block nav-link">Services</NavLink></li>
                                <li onClick={handleToggleMenu} className="nav-item font-medium md:p-0 py-1 pb-3"><NavLink activeClassName={'text-purple-600'} to="/contact-us" className="hover:text-purple-600 block nav-link">Contact Us</NavLink></li>
                                <li onClick={handleToggleMenu} className="nav-item font-medium md:p-0 py-1 pb-3"><NavLink activeClassName={'text-purple-600'} to="/404-error" className="hover:text-purple-600 block nav-link">404 Error Page</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="md:w-1/5 w-1/3 md:order-3 order-2 m-auto">
                        <div className=" relative">
                            <div className=" flex gap-1 items-center">
                                {
                                    !user?.email ? <>
                                        <Link className="ml-auto" to="/account"><button className="px-3 py-2 text-white bg-indigo-500 rounded-sm hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out font-medium text-sm">Sign Up/Sign In</button>

                                        </Link>

                                    </> : <>

                                        <button type="button" className="relative ml-auto bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={handleToggle}>
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
                                            <span className="animate-ping absolute inline-flex h-2 w-2 -top-0 -right-0 rounded-full bg-green-700 "></span>
                                        </button></>
                                }

                            </div>

                            <div className={show + " origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"} >
                                {/* <!--Active: "bg-gray-100", Not Active: "" --> */}
                                <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700" onClick={handleToggle}>{user?.displayName}</Link>
                                <Link to="/account" className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700" onClick={handleSignOut} >Sign out</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Header;