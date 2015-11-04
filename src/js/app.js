import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Login from './pages/login'
import Settings from './pages/settings'

render((
  <Router>
    <Route path="/" component={Login} />
    <Route path="/settings" component={Settings} />
  </Router>
), document.getElementById("app"))
