
import React, { useState, useEffect }from 'react';
import { Card, Button } from 'semantic-ui-react';
import NavBar from "./NavBar";
import axios from 'axios';



const Signup = () => {
  const [signup, setSignup] = useState({
    name: '',
    username: '',
    password: '',
  })

  const changeHandler = event => {
    const updatedSignup = {
      ...signup,
      [event.target.name]: event.target.value,
    }
    updatedSignup(setSignup)
  };

  const submitForm = event => {
    event.preventDefault()
    console.log(
      `name: ${signup.name}`,
      `username: ${signup.username}`,
      `password: ${signup.password}`
    );
    axios
      .post('https://bw-celeb-dead-app.herokuapp.com/auth/signup', {
        name: `${signup.name}`,
        username: `${signup.username}`,
        password: `${signup.password}`,
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error('Signup.js: Server Error ', error)
      })
  };



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

export default Signup
