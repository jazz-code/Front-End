// dependencies
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react'
>>>>>>> e7436ce622e071433ef98315472d68e7dfa59d59
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

// context api providers
<<<<<<< HEAD
import { ScoreProvider } from './contexts/ScoreContext';
import { UserProvider } from './contexts/UserContext';

function App() {
  const [celebs, setCelebs] = useState([])
  const [celebrity, setCelebrity] = useState({})
  const [currentScore, setCurrentScore] = useState(0)
  const [user, setUser] = useState({});
=======
import { UserDataProvider } from './contexts/UserDataContext'

function App() {
  const [userData, setUserData] = useState({})
>>>>>>> e7436ce622e071433ef98315472d68e7dfa59d59

  return (
    <Router>
      <div className="App">
<<<<<<< HEAD
        <UserProvider value={(user, setUser)}>
          <ScoreProvider value={(currentScore, setCurrentScore)}>
            <NavBar />
            <Route exact path={'/'} component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/game" component={CelebDisplay} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/modal" component={UnregisteredPlayerModal} />
          </ScoreProvider>
        </UserProvider>
=======
        <UserDataProvider value={{ userData, setUserData }}>
          <NavBar />
          <Route exact path={'/'} component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/game" component={CelebDisplay} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/modal" component={UnregisteredPlayerModal} />
        </UserDataProvider>
>>>>>>> e7436ce622e071433ef98315472d68e7dfa59d59
      </div>
    </Router>
  );
}

export default App;
