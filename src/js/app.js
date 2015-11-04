import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Login from './pages/login'

render((
  <Router>
    <Route path="/" component={Login} />
  </Router>
), document.getElementById("app"))
