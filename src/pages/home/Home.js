import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breakfast from '../foods/Breakfast/Breakfast';
import Dinner from '../foods/Dinner/Dinner';
import Lunch from '../foods/lunch/Lunch';
import SubNav from '../shared/subnav/SubNav';
import Banner from './Banner/Banner';

const Home = () => {

    const location = useLocation();

    console.log(location);
    return (
        <div>
            <Banner></Banner>
            <SubNav></SubNav>
            {(location.pathname === '/home/breakfast' || location.pathname === '/' || location.pathname === '/home') && <Breakfast></Breakfast>}

            {location.pathname === '/home/lunch' && <Lunch></Lunch>}

            {location.pathname === '/home/dinner' && <Dinner></Dinner>}

            <div className="flex items-center justify-center my-12 ">
                <Link className="bg-gray-200 p-4 text-gray-500 w-3/12 text-center rounded-lg" to="/your-order">Checkout Your food</Link>
            </div>


        </div >
    )
}

export default Home
