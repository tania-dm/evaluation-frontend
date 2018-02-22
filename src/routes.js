// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Batches,
  Batch,
  SignIn,
  Student

} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Batches} />
        <Route path="/batch/:batchId" component={Batch} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/student/:studentId" component={Student} />


      </div>
    )
  }
}
