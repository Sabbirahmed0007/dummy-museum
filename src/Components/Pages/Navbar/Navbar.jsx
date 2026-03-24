import React from 'react';
import {  Link, NavLink } from 'react-router';
import { Menu } from 'lucide-react';

const Navbar = () => {




    const links = (
        <div className='flex flex-col lg:flex-row space-x-2 items-center justify-center  '>
            <NavLink className={({ isActive }) => isActive ? "active text-secondary outline outline-secondary font-bold  rounded-md p-2" : ""} to={'/'}>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active text-secondary font-bold outline outline-secondary rounded-md p-2" : ""} to={'/collections'}>Collections</NavLink>
            
           
        </div>
    )


    return (
        <div>
            {/* <div className="navbar sticky top-0 bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <Link to={'/'} className=" text-xl animate-pulse">Dumb <span>Museum</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2 bg-base-100 w-40 z-1">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='hidden lg:flex'>
                        <a className="btn">Button</a>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}



            <nav className='navbar bg-base-300 shadow-md  px-4'>
                <div className='navbar-start'>
                    <h1 className='text-2xl  font-bold font-news'>Dummy <span className='italic'>Museum</span></h1>

                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='space-x-2 uppercase'>
                        {links}
                        
                   </ul>

                </div>
                <div className='navbar-end'>

                    <div className='dropdown'>

                        <div className='lg:hidden btn btn-ghost' tabIndex={0} role='button'>

                            <Menu></Menu>
                        </div>
                        <ul tabIndex={-1} className='menu menu-sm dropdown-content z-10 mt-3 w-56 right-0 bg-base-100 rounded-md uppercase  '>
                            {links}
                        </ul>
                    </div>
                    <div className='hidden lg:flex'>
                        <Link className='btn bg-accent text-base-300'>Submit</Link>
                    </div>

                </div>


            </nav>

        </div>
    );
};

export default Navbar;