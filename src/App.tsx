import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { HomePage, AboutPage } from './pages'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <AboutPage path='/about' />
          <Route path='/users'>
            <Users />
          </Route>
          <HomePage path='/' />
        </Switch>
      </div>
    </Router>
  )
}

function Users() {
  return <h2>Users</h2>
}

export default App
