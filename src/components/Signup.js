import React, { useState, useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import axios from "axios";

import { Animated } from "react-animated-css";

export default function Signup(props) {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    points: 1,
  });

  console.log("user", user);

  const changeHandler = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://bw-celeb-dead-app.herokuapp.com/auth/register", user)
      .then(results => {
        console.log(results.data);
        return props.history.push("/login");
      })
      .catch(error => {
        console.log("O no there is an error!", error);
      });
  };

  return (
    <Animated
    animationIn="bounceInLeft"
    animationOut="fadeOut"
    isVisible={true}
  >
    <div className="signup-container">
      <Card id="signup-card">
        <form onSubmit={handleSubmit} id="signup-form">
          <h1>Signup</h1>
          <label htmlFor="name" className="signup-label" />
          <input
            name="name"
            placeholder="Full Name"
            type="text"
            value={user.name} //this value is updated by the changeHandler
            onChange={changeHandler}
          />
          <label htmlFor="username" className="signup-label" />
          <input
            name="username"
            placeholder="Username"
            type="text"
            value={user.username} //this value is updated by the changeHandler
            onChange={changeHandler}
          />
          <label htmlFor="password" className="signup-label" />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={user.password} //this value is updated by the changeHandler
            onChange={changeHandler}
          />
          <label htmlFor="username" className="signup-label" />

          <br></br>
          <Button type="submit" inverted color="blue" id="signup-button">
            Submit
          </Button>
        </form>
      </Card>
    </div>
    </Animated>
  );
}
