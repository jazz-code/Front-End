//
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import CelebDisplay from './components/CelebDisplay'
import Welcome from './components/Welcome'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
      <UserProvider value={user}>
          <ScoreProvider value={score}>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <h1>Celeb Dead Or Alive</h1>
            <Route exact path="/game" component={CelebDisplay} />
          </ScoreProvider>
        </UserProvider>
>>>>>>> development
      </div>
    </Router>
  )
}

export default App

