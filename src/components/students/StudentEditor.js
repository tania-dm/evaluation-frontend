// src/components/students/StudentEditor.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import StudentIcon from 'material-ui/svg-icons/action/face'
import createStudent from '../../actions/students/create'
import './StudentEditor.css'


class StudentEditor extends PureComponent {
  constructor(props) {
    super()

    const { name, photo } = props

    this.state = {
      name,
      photo
    }
  }

  updateName(event) {
    this.setState({
      name: this.refs.name.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: this.refs.photo.value
    })
  }

  saveStudent() {
    const {
      name,
      photo
    } = this.state

    const student = {
      name,
      photo,
      batchId: this.props.batchId
    }

    this.props.createStudent(student)

  }

  render() {
    return (
      <div className="add-student">
        <div className="form-group">
          <label>Student Name</label>
          <br />
          <input
            type="text"
            ref="name"
            className="Student"
            placeholder="eg: Jane Doe"
            defaultValue={this.state.name}
            onChange={this.updateName.bind(this)}
            onKeyDown={this.updateName.bind(this)} />
        </div>

        <div className="form-group">
          <label>Photo URL</label>
          <br />
          <input
            type="text"
            ref="photo"
            className="photo"
            placeholder="eg: https://images.google.com/..."
            defaultValue={this.state.photo}
            onChange={this.updatePhoto.bind(this)}
            onKeyDown={this.updatePhoto.bind(this)} />
        </div>

        <div className="actions">
          <RaisedButton
            label="Add Student"
            primary={true}
            onClick={this.saveStudent.bind(this)}
            icon={<StudentIcon />} />
        </div>
      </div>
    )
  }
}

export default connect(null, { createStudent })(StudentEditor)
