//
import React, {useState, } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import CelebDisplay from './components/CelebDisplay'
import Welcome from './components/Welcome'
import { ScoreProvider } from './contexts/ScoreContext';

function App() {
  return (
    <Router>
      <div className="App">
        <UserProvider value={}>
          <ScoreProvider value={}>
        <Route exact path="/" component={Welcome} />
        <h1>Celeb Dead Or Alive</h1>
        <Route exact path="/game" component={CelebDisplay} />
        </ScoreProvider>
        </UserProvider>
      </div>
    </Router>
  )
}

export default App
