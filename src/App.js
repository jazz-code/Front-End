// dependencies
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

// components
import CelebDisplay from './components/CelebDisplay';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';
import UnregisteredPlayerModal from './components/UnregisteredPlayerModal';
import RegisteredPlayerModal from './components/RegisteredPlayerModal';

import PrivateRoute from "./components/PrivateRoute";

// context api providers
import { UserDataProvider } from './contexts/UserDataContext';
import { TimerProvider } from './contexts/TimerProvider';

function App() {
  const [userData, setUserData] = useState({})
  const secondsPassed = useRef(5);
  const [celebs, setCelebs] = useState([]);

  useEffect(() => {
    axios
      .get("https://bw-celeb-dead-app.herokuapp.com/celebs")
      .then(res => setCelebs(res.data))
      .catch(err => err.response);
  }, []);

  return (
    <Router>
      <div className="App">
        <UserDataProvider value={{ userData, setUserData }}>
          <TimerProvider value={{secondsPassed}}>
          <NavBar />
            <Route exact path={'/'} component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/game" render={(props => <CelebDisplay {...props} celebs={celebs}/>)} /> 
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/modal" component={UnregisteredPlayerModal} />
            <PrivateRoute
              exact
              path="/registered"
              component={RegisteredPlayerModal}
            />
          </TimerProvider>
        </UserDataProvider>
      </div>
    </Router>
  );
}

export default App;
