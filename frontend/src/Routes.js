import React from 'react'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import CreatePost from './components/CreatePost'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/createjobpost' exact component={CreatePost}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
