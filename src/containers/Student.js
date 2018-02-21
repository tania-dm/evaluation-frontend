import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { connect as subscribeToWebsocket } from '../actions/websocket'



class Student extends PureComponent {
  render() {
    return (
      <div>
      // bar with colors representing past evals for this student
        <h1>student with name, photo, color</h1>
        // render la eval form
      </div>

    )
  }
}

export default Student
