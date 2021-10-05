import React from 'react';
import nav from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className={nav.item}>
                <NavLink activeClassName={nav.active} to="/content" >Profile</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink activeClassName={nav.active} to="/dialog" >Message</NavLink>
            </div>
            <div className={nav.item}>Misic</div>
            <div className={nav.item}>Settings</div>
        </nav>
    )
}

export default Navbar;