import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import {fetchOneStudent} from '../actions/students/fetch'



class Student extends PureComponent {
  componentWillMount() {
    const { studentId } = this.props.match.params
    this.props.fetchOneStudent(studentId)
    this.props.subscribeToWebsocket()
  }


  render() {
console.log(this.props.students, 'yay')
    return (
      <p>test</p>
    )
  }
}

const mapStateToProps = ({ students, currentUser }) => ({ students, currentUser })

export default connect(mapStateToProps, { fetchOneStudent, subscribeToWebsocket, push })(Student)
