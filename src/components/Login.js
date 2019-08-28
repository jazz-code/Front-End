// dependencies
import React, { useState } from 'react'
import { Card, Button } from 'semantic-ui-react'
import axios from 'axios'

const Login = props => {
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
    console.log(`username: ${login.username}`, `password: ${login.password}`)
    axios
      .post('https://bw-celeb-dead-app.herokuapp.com/auth/login', {
        username: `${login.username}`,
        password: `${login.password}`
      })
      .then(response => {
        console.log(response.data)
        return props.history.push('/game')
      })
      .catch(error => {
        console.error('Server Error', error)
      })
  }
  return (
    <div className="login-container">
      <Card className="login-card">
        <form className="login-form" onSubmit={submitForm}>
          <h1>Login:</h1>
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
          <Button type="submit" inverted color="blue" className="login-button">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default Login
