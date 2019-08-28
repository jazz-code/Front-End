import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
<<<<<<< HEAD
  Redirect
} from "react-router-dom";

import Celeb from "./components/Celeb";
import CelebDisplay from "./components/CelebDisplay";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Login from './components/Login';

import { ScoreProvider } from "./contexts/ScoreContext";
import { UserProvider } from "./contexts/UserContext";
import NavBar from "./components/NavBar";

=======
  Redirect,

} from 'react-router-dom'


import Celeb from './components/Celeb';
import CelebDisplay from './components/CelebDisplay'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Login from './components/Login'

import { ScoreProvider } from './contexts/ScoreContext'
import { UserProvider } from './contexts/UserContext'
import NavBar from './components/NavBar';


>>>>>>> 4bbe18016d44cd05df55a513f5159aee472f03dc
function App() {
  const [celebs, setCelebs] = useState([])

  const [celebrity, setCelebrity] = useState({})

  const [score, setScore] = useState({
    score: null,
    totalScore: null
  })

  const [user, setUser] = useState({
    id: null,
    name: '',
    username: '',
    password: '',
    points: null
  })

  return (
    <Router>
      <div className="App">
        <NavBar />
        <UserProvider value={user}>
          <ScoreProvider value={score}>
<<<<<<< HEAD
            <NavBar />
=======
>>>>>>> 4bbe18016d44cd05df55a513f5159aee472f03dc
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/game" component={CelebDisplay} />
            <Route exact path= "/signup" component={Signup} />
          </ScoreProvider>
        </UserProvider>
      </div>
    </Router>
  );
}


export default App

     

