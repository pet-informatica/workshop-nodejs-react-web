import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import Post from './Post'
import Admin from './Admin'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1><Link to="/">My Blog :)</Link></h1>
          <small><Link to="/admin">Admin</Link></small>
          <Route exact path="/" component={Home}/>
          <Route path="/post/:id" component={Post}/>
          <Route path="/admin" component={Admin}/>
        </div>
      </BrowserRouter>
    )
  }
}
