import React, { useState, useEffect } from 'react';
import { Card, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function Signup(props) {
  const [user, setUsers] = useState({
    name: '',
    username: '',
    password: '',
    points: null,
  });

  console.log('user', user);

  const changeHandler = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };

    setUsers(updatedUser);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('https://bw-celeb-dead-app.herokuapp.com/auth/register', user)
      .then(results => {
        console.log(results.data);
        return props.history.push('/game');
      })
      .catch(error => {
        console.log('O no there is an error!', error);
      });
  };

  return (
    <div className='signup-container'>
         <Card className='signup-card'>
            <form onSubmit={handleSubmit} className='signup-form'>
                <h1>Signup:</h1>
                <label htmlFor='name' className='signup-label' />
                <input
                name='name'
                placeholder='Full Name'
                type='text'
                value={user.name} //this value is updated by the changeHandler
                onChange={changeHandler}
                />
                <label htmlFor='username' className='signup-label' />
                <input
                name='username'
                placeholder='Username'
                type='text'
                value={user.username} //this value is updated by the changeHandler
                onChange={changeHandler}
                />
                <label htmlFor='password' className='signup-label' />
                <input
                name='password'
                placeholder='Password'
                type='password'
                value={user.password} //this value is updated by the changeHandler
                onChange={changeHandler}
                />
                <label htmlFor='username' className='signup-label' />
                <input
                name='points'
                placeholder='enter points'
                type='number'
                value={user.points} //this value is updated by the changeHandler
                onChange={changeHandler}
                />
                <br></br>
                <Button type='submit' inverted color='blue' className='signup-button'>
                Submit
                </Button>
            </form>
        </Card>
    </div>
  );
}
