// dependencies
import React, { useState, useEffect } from 'react';
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
import { ScoreProvider } from './contexts/ScoreContext';
import { UserProvider } from './contexts/UserContext';

function App() {
  const [celebs, setCelebs] = useState([])
  const [celebrity, setCelebrity] = useState({})
  const [score] = useState()
  const [user, setUser] = useState({
    id: null,
    name: "",
    username: "",
    password: "",
    points: null,
  });

  return (
    <Router>
      <div className='App'>
        <UserProvider value={user}>
          <ScoreProvider value={score}>
            <NavBar />
            <Route exact path={'/'} component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/game" component={CelebDisplay} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/modal" component={UnregisteredPlayerModal} />
          </ScoreProvider>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
