import React from 'react';
import { NavLink } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import './navItems.css';

const NavItems = () => {
    return (
        <nav className="nav-items">
            <ul>
                <li><NavLink exact to="/">home.</NavLink></li>
                <Divider style={{ width: '95%' }}/>
                <li><NavLink to="/projects">projects.</NavLink></li>
                <Divider style={{ width: '95%' }}/>
                <li><NavLink to="/about">about.</NavLink></li>
            </ul>
        </nav>
    );

}

export default NavItems;