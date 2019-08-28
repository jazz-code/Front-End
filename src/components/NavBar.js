import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../styling/logo/logo.jpg"

export default function NavBar() {
    return(
        <>
        <div className="nav-div">
            <div className='ui menu'>
                <img className="nav-logo" src ={logo} alt = "a somewhat macabre but still amusing logo" />
                <NavLink exact to='/' className="item">Celebrity Dead Or Alive</NavLink>
                <NavLink to='/login' className="item">Login</NavLink>
                <NavLink to='/signup' className="item">Signup</NavLink>
            </div>
        </div>
        <div className="nav-div-2">
            <div className='ui fluid vertical menu'>
                <NavLink exact to='/' className="item">Celebrity Dead Or Alive</NavLink>
                <NavLink to='/login' className="item">Login</NavLink>
                <NavLink to='/signup' className="item">Signup</NavLink>
            </div>
        </div>
        </>
    );
}

