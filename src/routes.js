// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Lobby,
  Batch,
  SignIn,
  Student

} from './containers'

export default class Routes extends Component {
  render() {
    let styles = {
      padding: '2rem'
    }
    return (
      <div style={styles}>
        <Route exact path="/" component={Lobby} />
        <Route path="/batch/:batchId" component={Batch} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/student/:studentId" component={Student} />


      </div>
    )
  }
}
