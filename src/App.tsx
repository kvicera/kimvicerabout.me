import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { HomePage, AboutPage } from './pages'

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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

// function Home() {
//   return <h2>Home</h2>
// }

// function About() {
//   return <h2>About</h2>
// }

function Users() {
  return <h2>Users</h2>
}

export default App
