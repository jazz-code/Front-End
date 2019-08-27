import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return(
        <div className='navBar'>
            <NavLink to='/'>Celebrity Dead Or Alive</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Signup</NavLink>
        </div>
    );
}

