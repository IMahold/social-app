import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginForm from './components/login/LoginForm'

export default function Routes() {
  return (
    <div>
        <Switch>
            <Route path='/' exact component={LoginForm} />
            {/* <Route path='home' exact component={Home} /> */}
            <Route exact component={Unknown} />
        </Switch>

    </div>
  )
}



function Unknown(){
    return <div>Error 404 | Page not found</div>
}
