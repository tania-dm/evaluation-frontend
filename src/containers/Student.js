import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import {fetchOneStudent} from '../actions/students/fetch'
import fetchEvaluations from '../actions/evaluations/fetch'
import EvaluationEditor from '../components/evaluations/EvaluationEditor'
import Paper from 'material-ui/Paper'
import './Student.css'


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

  renderEvaluation = (evaluation, index) => {
    let styles = {
      backgroundColor: evaluation.color
    }
    return (

      <li
        key={index}
        className="evaluation-item"
        style={styles}
      >
      </li>

    )
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
          <ul className="evaluation-list">
              { this.props.evaluations.map(this.renderEvaluation)}
          </ul>
        <h1>{<img className="picture" src={student.photo} alt="no picture available"/>}</h1>
        <br />
        <Paper className="paper-student">
          <EvaluationEditor studentId={this.props.match.params.studentId} batchId={student.batchId} />
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ students, evaluations, currentUser }) => ({ students, evaluations, currentUser })

export default connect(mapStateToProps, { fetchOneStudent, fetchEvaluations, subscribeToWebsocket, push })(Student)
