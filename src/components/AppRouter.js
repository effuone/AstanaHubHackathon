import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Dashboard2 from '../pages/Dashboard2.0'

function AppRouter() {
    return (
        <Switch>
            <Route key={"Home"} path="/" component={Home} exact />
            <Route key={"Dashboard"} path="/dashboard" component={Dashboard2} exact />
            <Route key={"register"} path="/register" component={Register} exact />
            <Route key={"login"} path="/login" component={Login} exact />
            <Redirect to="/" />
        </Switch>
    )
}

export default AppRouter