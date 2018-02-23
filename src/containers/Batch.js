import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchStudents from '../actions/students/fetch'
import fetchOneBatch from '../actions/batches/fetch'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import './Batch.css'
import StudentEditor from '../components/students/StudentEditor'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import AskRandomStudent from '../components/batches/AskRandomStudent'


class Batch extends PureComponent {
  componentWillMount() {
    const { batchId } = this.props.match.params
    this.props.fetchStudents(batchId)
    this.props.fetchOneBatch(batchId)
    this.props.subscribeToWebsocket()
    this.setState({
      batchId
    })
  }

  goToStudent = studentId => event => this.props.push(`/student/${studentId}`)

  renderStudent = (student, index) => {

    let name = student.name
    let photo = student.photo
    let lastColor = student.color
    let styles = {
      backgroundColor: lastColor
    }

    return (
      <div key={index}>
        <MenuItem
          onClick={this.goToStudent(student._id)}
          primaryText={name}
          />
          <span className="square" style={styles}> </span>
          <img className="picture" src={photo} alt="not available" onClick={this.goToStudent(student._id)} />
      </div>
    )
  }

  render() {

    let batch = this.props.batches.find(batch =>{
      return batch._id === this.state.batchId
    })
    if (!batch) {
      batch = {}
    }

    return (
      <div className="Students">
        <h1 className="Header">Class #{batch.number}</h1>
        <AskRandomStudent />
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

const mapStateToProps = ({ students, batches, currentUser }) => ({ students, batches, currentUser })

export default connect(mapStateToProps, { fetchStudents, fetchOneBatch, subscribeToWebsocket, push })(Batch)
