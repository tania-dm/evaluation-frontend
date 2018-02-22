import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import {fetchOneStudent} from '../actions/students/fetch'
import fetchEvaluations from '../actions/evaluations/fetch'
import EvaluationEditor from '../components/evaluations/EvaluationEditor'
import Paper from 'material-ui/Paper'



class Student extends PureComponent {
  componentWillMount() {
    const { studentId } = this.props.match.params
    this.props.fetchOneStudent(studentId)
    this.props.fetchEvaluations(studentId)
    this.props.subscribeToWebsocket()
    this.setState({
      studentId
    })
  }


  render() {
    let student = this.props.students.find(student =>{
      return student._id === this.state.studentId
    })
    if (!student) {
      student = {}
    }
    return (
      <div className="Student">
        <h1>{student.name}</h1>
        <p>{student.color}</p>
        <h1>{<img className="picture" src={student.photo} alt="no picture available"/>}</h1>
        <br />
        <Paper className="paper">
          <EvaluationEditor studentId={this.props.match.params.studentId} />
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ students, currentUser }) => ({ students, currentUser })

export default connect(mapStateToProps, { fetchOneStudent, fetchEvaluations, subscribeToWebsocket, push })(Student)
