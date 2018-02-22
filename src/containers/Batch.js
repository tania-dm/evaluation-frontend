import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchStudents from '../actions/students/fetch'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import './Batch.css'
import StudentEditor from '../components/students/StudentEditor'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'


class Batch extends PureComponent {
  componentWillMount() {
    const { batchId } = this.props.match.params
    this.props.fetchStudents(batchId)
    this.props.subscribeToWebsocket()
  }

  goToStudent = studentId => event => this.props.push(`/student/${studentId}`)

  renderStudent = (student, index) => {

    let name = student.name
    let photo = student.photo
    let lastColor = student.color
    
// need edit and delete student button

    return (
      <div>
        <MenuItem
          key={index}
          onClick={this.goToStudent(student._id)}
          primaryText={name}
          />
          <p> {lastColor}</p>
          <img className="picture" src={photo} alt="no picture available" />
      </div>
    )
  }

  render() {
    return (
      <div className="Students">
        <h1 className="Header">Class</h1>
        <Paper className="paper">
          <StudentEditor batchId={this.props.match.params.batchId} />
        </Paper>
        <h1 className="Header">Students</h1>
        <Menu>
          { this.props.students.map(this.renderStudent)}
        </Menu>

      </div>
    )
  }
}

const mapStateToProps = ({ students, currentUser }) => ({ students, currentUser })

export default connect(mapStateToProps, { fetchStudents, subscribeToWebsocket, push })(Batch)
