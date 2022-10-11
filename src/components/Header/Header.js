import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <nav>
                <div className="navbar bg-white shadow-lg py-3 flex flex-col md:flex-row md:justify-between text-center">
                    <div className="">
                        <NavLink to='/home' className="btn btn-ghost normal-case text-2xl">
                            <img src="https://www.pngmart.com/files/19/Vector-Quiz-Transparent-PNG.png" alt="quiz" className='w-20' />

                            <span>Web Dev-Quiz</span>
                        </NavLink>
                    </div>
                    <ul className=" p-3 font-bold gap-4 flex flex-col md:flex-row">
                        <li><NavLink to='/home' className='hover:bg-yellow-500 hover:text-white rounded-lg p-3'>Home</NavLink></li>
                        <li ><NavLink to='/statistics' className='hover:bg-yellow-500 hover:text-white rounded-lg p-3'>Statistics</NavLink></li>
                        <li><NavLink to='/blog' className='hover:bg-yellow-500 hover:text-white rounded-lg p-3'>Blog</NavLink></li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Header;