import React, { useState, useEffect }from 'react';
import { Card, Button } from 'semantic-ui-react';
import axios from 'axios';


const Signup = () => {
    const [signup, setSignup] = useState ({
        name: '',
        username: '',
        password: ''
    });

    const changeHandler = event => {
        const updatedSignup = {...signup, [event.target.name]: event.target.value}
        updatedSignup(setSignup);
         //...login gives us the original state of login whaever it last was {...$anything} (in this case {...login}) then we add whatever the value is (event.target.value) to whatever the changed feild it corresponds to (event.target.name)
    }

    const submitForm = event => {
        event.preventDefault();
        console.log(`name: ${signup.name}`, `username: ${signup.username}`, `password: ${signup.password}`);
        axios
        .post('https://bw-celeb-dead-app.herokuapp.com/auth/signup', {
            'name': `${signup.name}`,
            'username': `${signup.username}`,
            'password': `${signup.password}`
        })
        .then(response => {
            console.log(response.data);
            // .props.history.data
        })
        .catch(error => {
            console.error('Signup.js: Server Error ', error)
        })
    }


    return(
        <div className = 'signup-container'>
            <Card className = 'signup-card'>
                <form onSubmit={submitForm} className='signup-form'>
                    <h1>Signup:</h1>
                    <label htmlFor = 'name' className='signup-label'/>
                    <input 
                        name = 'name'
                        placeholder = 'Name'
                        type = 'text'
                        value = {signup.name} //this value is updated by the changeHandler
                        onChange= {changeHandler}
                    />
                    <label htmlFor = 'username' className='signup-label'/>
                    <input 
                        name = 'username'
                        placeholder = 'Username'
                        type = 'text'
                        value = {signup.username} //this value is updated by the changeHandler
                        onChange= {changeHandler}
                    />
                    <label htmlFor = 'password' className='signup-label'/>
                    <input 
                        name = 'password'
                        placeholder = 'Password'
                        type = 'password'
                        value  = {signup.password} //this value is updated by the changeHandler
                        onChange = {changeHandler}
                    />
                        <br></br>
                    <Button type='submit' inverted color='blue' className= "signup-button">Submit</Button>
                </form>
            </Card>
        </div>
    )
}

export default Signup;