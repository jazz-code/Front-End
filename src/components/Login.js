// dependencies
import React, { useState, useContext } from 'react'
import { Card, Button } from 'semantic-ui-react'
import axios from 'axios'
import UserDataContext from '../contexts/UserDataContext'

import { Animated } from "react-animated-css";

const Login = props => {
  const { userData, setUserData } = useContext(UserDataContext)

  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const changeHandler = event => {
    setLogin({ ...login, [event.target.name]: event.target.value })
    //...login gives us the orignal state of login whaever it last was {...$anything} (in this case {...login}) then we add whatever the value is (event.target.value) to whatever the changed feild it corresponds to (event.target.name)
  }

  const submitForm = event => {
    event.preventDefault()
    axios
      .post('https://bw-celeb-dead-app.herokuapp.com/auth/login', login)
      .then(response => {
        console.log(response.data)
        setUserData({
          id: response.data.id,
          message: response.data.message,
          name: response.data.name,
          score: response.data.points
        })
        localStorage.setItem('token', response.data.token)
        const data = response.data
        console.log('response data variable: ', data)
      })
      .then(props.history.push('/game'))
      .catch(error => {
        console.error('Server Error', error)
      })
  }

  console.log('userData: ', userData)

  return (
    <Animated
    animationIn="bounceInLeft"
    animationOut="fadeOut"
    isVisible={true}
  >
  <Animated
    animationIn="bounceInRight"
    animationOut="fadeOut"
    isVisible={true}
  >
    <div className="score-container">
        <div className="score percent"></div>
    </div>
  </Animated>
    <div className="login-container">
      <Card id="login-card">
        <form id="login-form" onSubmit={submitForm}>
          <h1>Login</h1>
          <label htmlFor="name" className="login-label" />
          <input
            name="username"
            placeholder="Username"
            type="text"
            value={login.username} //this value is updated by the changeHandler
            onChange={changeHandler}
          />
          <label htmlFor="password" className="login-label" />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={login.password} //this value is updated by the changeHandler
            onChange={changeHandler}
          />
          <br></br>
          <Button type="submit" inverted color="blue" id="login-button">
            Submit
          </Button>
        </form>
      </Card>
    </div>
    </Animated>
  )
}

export default Login
