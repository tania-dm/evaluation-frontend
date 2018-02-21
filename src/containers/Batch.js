import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { connect as subscribeToWebsocket } from '../actions/websocket'



class Batch extends PureComponent {
  render() {
    return (
      <div>
      // bar with 1-3 segments showing me the percentage (%) of students evaluated
// GREEN, YELLOW, and RED
// form for adding a student
// button for ask q == new container
        <h1>studentgrid with name, photo, color</h1>
        <h1>student</h1>
        <h1>student</h1>
        <h1>student</h1>
      </div>

    )
  }
}

export default Batch
