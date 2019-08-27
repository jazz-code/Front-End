//
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Celeb from './components/Celeb';
import CelebDisplay from "./components/CelebDisplay";
import Welcome from "./components/Welcome";

import { ScoreProvider } from './contexts/ScoreContext';
import { UserProvider } from './contexts/UserContext';

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
        <UserProvider value={user}>
          <ScoreProvider value={score}>
            <Route exact path="/" component={Welcome} />
            <h1>Celeb Dead Or Alive</h1>
            <Route
              path="/game"
              render={props => {
                  return <CelebDisplay {...props} />
            }} />
            {/* <Route exact path="/game" component={CelebDisplay} /> */}
          </ScoreProvider>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
