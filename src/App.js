//
import React from 'react'
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import CelebDisplay from './components/CelebDisplay'
import Welcome from './components/Welcome'
import NavBar from './components/NavBar'

function App() {
  return (
    
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Welcome} />
          <h1>Celeb Dead Or Alive</h1>
        <Route exact path="/game" component={CelebDisplay} />
      </div>
    
  )
}

export default App
