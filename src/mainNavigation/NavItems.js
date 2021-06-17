import React from 'react';
import { NavLink } from 'react-router-dom';
import './navItems.css';

const NavItems = () => {
    return (
        <nav className="nav-items">
            <ul>
                <li><NavLink exact to="/">home.</NavLink></li>
                <li><NavLink to="/projects">projects.</NavLink></li>
                <li><NavLink to="/about">about.</NavLink></li>
            </ul>
        </nav>
    );

}

export default NavItems;