import React from 'react'
import { NavLink } from 'react-router-dom'

const SubNav = () => {
    return (
        <div className="w-full flex justify-center space-x-4 -mt-16">
            <NavLink activeClassName="selected" activeStyle={{ fontWeight: 'bold', color: 'red', borderBottom: '1px solid currentcolor', paddingBottom: '20px' }} className="" to="/home/breakfast">Breakfast</NavLink>
            <NavLink activeStyle={{ fontWeight: 'bold', color: 'red', borderBottom: '1px solid currentcolor', paddingBottom: '20px' }} className="" to="/home/lunch">lunch</NavLink>
            <NavLink activeStyle={{ fontWeight: 'bold', color: 'red', borderBottom: '1px solid currentcolor', paddingBottom: '20px' }} className="" to="/home/dinner">dinner</NavLink>
        </div>
    )
}

export default SubNav
