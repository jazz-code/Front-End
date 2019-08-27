import React, { useState, useEffect }from 'react'
import { Card, Button } from 'semantic-ui-react';
import NavBar from "./NavBar";


export default function Signup() {
    
    return(
        <>
        <NavBar />
        <Card className = 'signup-card'>
            <form className='signup-form'>
                <h1>Signup:</h1>
                <label htmlFor = 'name' className='signup-label'/>
                <input 
                    name = 'full name'
                    placeholder = 'Full Name'
                    type = 'text'
                    // value = {login.username} //this value is updated by the changeHandler
                    // onChange= {changeHandler}/>
                />
                <label htmlFor = 'username' className='signup-label'/>
                <input 
                    name = 'username'
                    placeholder = 'Username'
                    type = 'text'
                    // value = {login.username} //this value is updated by the changeHandler
                    // onChange= {changeHandler}/>
                />
                <label htmlFor = 'password' className='login-label'/>
                <input 
                    name = 'password'
                    placeholder = 'Password'
                    type = 'password'
                    // value  = {login.password} //this value is updated by the changeHandler
                    // onChange = {changeHandler}/>
                />
                    <br></br>
                <Button type='submit' inverted color='blue' className= "signup-button">Submit</Button>
            </form>
        </Card>
        </>
    )
}