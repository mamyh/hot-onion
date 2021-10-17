import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex h-20">
            <div className="flex-none w-44 h-auto ml-32 relative">
                <Link to="/home"> <img className="absolute inset-0 w-full h-full " src={require('../../../images/logo.png').default} alt="logo" /></Link>
            </div>
            <nav className="flex-auto items-center flex justify-end ">
                <ul className="flex space-x-6 mr-32">
                    <li className="text-black w-32 flex items-center  p-3 justify-center font-semibold text-xl">
                        <Link to="my-chart">My Chart</Link>
                    </li>
                    <li className="text-black w-32 flex items-center  p-3  justify-center font-semibold text-xl">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="text-white bg-red-600 w-32 flex items-center  justify-center p-3 rounded-l-full rounded-r-full font-semibold text-xl">
                        <Link to="/register">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
