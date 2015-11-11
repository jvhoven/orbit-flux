import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexLink } from 'react-router'
import Login from './pages/login'
import Settings from './pages/settings'

// Initialize router
render((
    <section>
        <div>
            <ul>
                <li><IndexLink to="/home">Home</IndexLink></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </div>
        <Router>
            <Route path="/" component={Login} />
            <Route path="/settings" component={Settings} />
        </Router>
    </section>
), document.getElementById("app"))
