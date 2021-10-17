import React from 'react';
import { useLocation } from 'react-router-dom';
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


        </div >
    )
}

export default Home
